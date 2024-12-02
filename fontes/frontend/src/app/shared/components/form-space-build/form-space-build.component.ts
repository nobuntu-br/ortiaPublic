import { AfterViewInit, Component, EventEmitter, Inject, Input, Optional, Output, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router, ActivatedRoute } from '@angular/router';
import { IPageStructure } from 'app/shared/models/pageStructure';
import { GeneratedSimpleFormComponent } from '../generated-simple-form/generated-simple-form.component';
import { FormSpaceBuildService } from 'app/shared/services/form-space-build.service';
import { TranslocoService } from '@ngneat/transloco';


export interface ICreateSpace{
      resourceForm: any,
      className: string,
      target: any,
      value: IPageStructure,
      dataToCreatePage: IPageStructure,
      getDataFromAPIFunction: () => void,
}

export interface ICreateSpaceStepper{
  name: string,
  component: ICreateSpace
  type?: string
}

@Component({
  selector: 'app-form-space-build',
  templateUrl: './form-space-build.component.html',
  styleUrls: ['./form-space-build.component.scss']
})
export class FormSpaceBuildComponent implements AfterViewInit {
  /**
   * FormGroup que armazena os dados do formuário. Todas os dados vão diretamente para ele, para assim ir para as APIs.
   */
  @Input() resourceForm: FormGroup;
  /**
   * Output que indica quando o formulário terminou de ser criado.
   * Exemplo: false.
   */
  @Output() formIsReady = new EventEmitter<boolean>();
  // resourceForm: FormGroup;
  /**
   * Formulário usará o localStorage para armazenar valores que estão sendo preenchidos.
   * @example true
   */
  @Input() storeInLocalStorage: boolean = true;
  /**
   * Dados contidos no JSON que orienta a criação da página
   */
  @Input() dataToCreatePage: IPageStructure;
  /**
   * Função que informa e envia para API os dados para criação ou edição do item.
   */
  @Input() submitFormFunction: () => void;
  /**
   * Função que informa para API remover o item está sendo editando. 
   */
  @Input() deleteFormFunction: () => void;
  /**
   * Função responsável para retornar a pagina anterior
   */
  @Input() returnFormFunction: () => void;
  /**
   * Situação atual do formuário, sendo ele estando no modo de edita ou criar um novo item.
   * @example "edit" ou "new"
   */
  @Input() currentFormAction: string;
    /**
   * Informa quais são os passos e nome de cada passo do formulário.
   * @example "['endereco', 'valores', 'forma de pagamento']"
   */
    formStepperStructure : ICreateSpaceStepper[] = [];
  /**
   * Nome da classe na qual o formulário pertence.
   * @example "Produtos"
   */
  @Input() className: string;
  /**
   * Configurações adicionais (ainda não é usado)
   */
  // @Input() config;

  dataToCreatePageSteps: IPageStructure[] = [];

  isLoading: boolean = true;

  @ViewChildren('placeToRender', { read: ViewContainerRef }) target!: QueryList<ViewContainerRef>;

  constructor(
    public formSpaceBuild: FormSpaceBuildService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    protected route: ActivatedRoute,
    protected translocoService: TranslocoService,
    @Optional() private matDialogComponentRef: MatDialogRef<GeneratedSimpleFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: any,
    ) { }

  ngAfterViewInit(): void {
    if(this.data){
      this.setDialogData();      
    }
    this.checkTypeOfForm();
  }

  checkTypeOfForm() {
    if(this.dataToCreatePage.config.isFormStepper){
      this.generateStepFormList();
    }
    if(!this.dataToCreatePage.config.isFormStepper){
      this.generateSimpleFormList();
    }
  }

  /**
   * Função que irá criar cada campo de preenchimento de acordo com as variáveis da classe do formulário.
   */
  generateSimpleFormList() {
    this.dataToCreatePage = this.subFormLastAttribute(this.dataToCreatePage);
    let send: ICreateSpace = {
      resourceForm: this.resourceForm,
      className: this.className,
      target: this.target.toArray()[0],
      value: this.dataToCreatePage,
      dataToCreatePage: this.dataToCreatePage,
      getDataFromAPIFunction: () => {this.isLoading = false; this.formIsReady.emit(true)}
    }

    let simpleForm = this.formSpaceBuild.createComponent(send);
  }

  generateStepFormList() {
    this.formStepperStructure = [];
    this.buildStepperStructure();
    this.buildDataToCreatePageSteps();
    setTimeout(() => {
      this.dataToCreatePageSteps.forEach((data, index) => {
        data = this.subFormLastAttribute(data);
        let send: ICreateSpace = {
          resourceForm: this.resourceForm,
          className: this.className,
          target:this.target.toArray()[index],
          value: data,
          dataToCreatePage: data,
          getDataFromAPIFunction: () => {this.isLoading = false; this.formIsReady.emit(true)}
        }
        
        let simpleForm = this.formSpaceBuild.createComponent(send);
        });
      });
  }

  /**
   * Caso esse formuário for aberto como dialog, ele fechará. Se não ele irá para pagina anterior.
   */
  return() {
    if (this.matDialogComponentRef) {
      
      this.matDialogComponentRef.close();

    } else {
      if(this.currentFormAction === "edit"){
        this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
      } else if(this.currentFormAction === "new"){
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    }
  }

  isLastStep(stepper: MatStepper): boolean {
    return stepper.selectedIndex === stepper.steps.length - 1;
  }

  isFirstStep(stepper: MatStepper): boolean {
    return stepper.selectedIndex === 0;
  }

  private subFormLastAttribute(dataToCreatePage: IPageStructure): IPageStructure {
    for(let i = 0; i < dataToCreatePage.attributes.length; i++){
      if(dataToCreatePage.attributes[i].type === "subform"){
        let attributeSubForm = dataToCreatePage.attributes[i];
        dataToCreatePage.attributes.splice(i, 1);
        dataToCreatePage.attributes.push(attributeSubForm);
      }
    }
    return dataToCreatePage;
  }

  private buildResourceForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: [null],
    });
  }

  private setDialogData(){
    this.dataToCreatePage = this.data.dataToCreatePage;
    this.resourceForm = this.buildResourceForm(new FormBuilder());
    this.className = this.data.className;
    this.currentFormAction = this.data.currentFormAction;
    this.deleteFormFunction = this.data.deleteFormFunction;
    this.returnFormFunction = this.data.returnFormFunction;
    // this.config = this.data.config;
    if(this.data.currentFormAction === "edit"){
      this.submitFormFunction = () => {this.data.submitFormFunction(this.dataToCreatePage, this.data.itemToEdit, this.resourceForm.value)};
    }
    if(this.data.currentFormAction === "new"){
      this.submitFormFunction = () => {this.data.submitFormFunction(this.dataToCreatePage, this.resourceForm.value)};
    }
  }
  
  private buildDataToCreatePageSteps(){
    this.dataToCreatePage.config.steps.forEach((step, index) => {
      this.dataToCreatePageSteps.push({config: this.dataToCreatePage.config, attributes: this.dataToCreatePage.attributes.filter(attribute => attribute.step === step)});
    });
  }

  private buildStepperStructure(){
    this.dataToCreatePage.config.steps.forEach(step => {
      this.formStepperStructure.push({name: step, component: {resourceForm: this.resourceForm, className: this.className, target: this.target, value: this.dataToCreatePage, dataToCreatePage: this.dataToCreatePage, getDataFromAPIFunction: () => {this.isLoading = false; this.formIsReady.emit(true)}}, type: "step"});
    });
  }
}
