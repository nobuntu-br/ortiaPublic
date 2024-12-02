import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Inject, Injector, Input, OnInit, Optional, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { IPageStructure } from 'app/shared/models/pageStructure';
import { environment } from 'environments/environment';
import { Subject, take, takeUntil } from 'rxjs';
import { IDefaultListComponentDialogConfig, DefaultListComponent } from '../default-list/default-list.component';
import { ISearchableField } from '../search-input-field/search-input-field.component';
import { FormGeneratorService } from 'app/shared/services/form-generator.service';
import { FormSpaceBuildComponent } from '../form-space-build/form-space-build.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectableCardComponent } from '../selectable-card/selectable-card.component';
import { OnlineOfflineService } from 'app/shared/services/online-offline.service';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  styleUrls: ['./subform.component.scss']
})
export class SubformComponent implements AfterViewInit {
  @Input() itemsDisplayed: any[] = [];
  @Input() columnsQuantity: number = 1;
  @Input() displayedfieldsName: string[] | null;
  @Input() fieldsType: string[];
  @Input() objectDisplayedValue: string[]
  @Input() userConfig: any;
  @Input() isSelectable: boolean = true;
  @Input() selectedItemsLimit: number | null = null;
  @Input() index: number;
  /**
   * Campo que saída para os valores que foram selecionados.
   */
  @Output() eventSelectedValues = new EventEmitter<any[]>();
  @Input() apiUrl!: string;
  @Input() searchableFields: ISearchableField[] | null = null;
  /**
  * Número máximo de itens que serão renderizados na lista.\
  * @example 3
  */
  @Input() maxDisplayedItems: number = 25;
  @Input() className!: string;
  @Input() isAbleToCreate: boolean = true;
  @Input() isAbleToEdit: boolean = true;
  @Input() isAbleToDelete: boolean = true;
  /**
   * Subject responsável por remover os observadores que estão rodando na pagina no momento do componente ser deletado.
   */
  private ngUnsubscribe = new Subject();

  /**
   * Itens da lista selecionados
   * @example [{'id':'1', 'nome':'aba'}, {'id':'2', 'nome':'Carlos'}]
   */
  selectedItems: any[] = [];
  /**
   * Lista com os componentes que estão sendo renderizados na lista.
   */
  private componentsCreatedList: any[] = [];
  /**
   * Estado do checkBox que seleciona todos os itens da lista.
   */
  selectAllCheckBox: boolean = false;
  /**
   * Estado que informa se o componente atual foi aberto por meio de um Dialog.
   * @example "true" ou "false"
   */
  isOpenedOnDialog: boolean = false;
  @Input() dataToCreatePage: IPageStructure;
  /**
   * Rota que levará para pagina da classe
   */
  @Input() route: string;
  @Input() isEnabledToGetDataFromAPI: boolean = true;
  /**
   * Define se o menu é fixado na tela
   */
  @Input() menuIsFixedOnScreen: boolean = true;
  @Input() useFormOnDialog: boolean = true;

  isLoading: boolean = true;

  @ViewChild('placeToRender', { read: ViewContainerRef }) target!: ViewContainerRef;

  protected router: Router;
  private http: HttpClient;
  private translocoService: TranslocoService;
  private matDialog: MatDialog;
  protected activatedRoute: ActivatedRoute;
  currentAction: string;
  protected formBuilder: FormBuilder;
  createdSubClass: any[] = [];
  resourceForm: any;
  public inputValue: FormControl<object[]> = new FormControl<object[]>([]);
  private isOnline: boolean;  

  constructor(
    protected injector: Injector,
    private formGeneratorService: FormGeneratorService,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogInjectorData: IDefaultListComponentDialogConfig,
    private onlineOfflineService: OnlineOfflineService,
    @Optional() private matDialogComponentRef: MatDialogRef<DefaultListComponent>
  ) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.http = this.injector.get(HttpClient);
    this.translocoService = this.injector.get(TranslocoService);
    this.matDialog = this.injector.get(MatDialog);

    if (matDialogComponentRef != null) {
      this.isOpenedOnDialog = true;
    }

    if (dialogInjectorData != null) {

      this.itemsDisplayed = dialogInjectorData.itemsDisplayed;
      this.columnsQuantity = dialogInjectorData.columnsQuantity;
      this.displayedfieldsName = dialogInjectorData.displayedfieldsName;
      this.fieldsType = dialogInjectorData.fieldsType;
      this.objectDisplayedValue = dialogInjectorData.objectDisplayedValue;
      this.userConfig = dialogInjectorData.userConfig;
      this.searchableFields = dialogInjectorData.searchableFields;
      if (dialogInjectorData.selectedItemsLimit >= 0) {
        this.selectedItemsLimit = dialogInjectorData.selectedItemsLimit;
      }
      this.apiUrl = dialogInjectorData.apiUrl;
      this.isSelectable = dialogInjectorData.isSelectable;
      this.className = dialogInjectorData.className;
      this.isAbleToCreate = dialogInjectorData.isAbleToCreate;
      this.isAbleToEdit = dialogInjectorData.isAbleToEdit;
      this.dataToCreatePage = dialogInjectorData.dataToCreatePage;
      this.useFormOnDialog = dialogInjectorData.useFormOnDialog;
      this.isEnabledToGetDataFromAPI = dialogInjectorData.isEnabledToGetDataFromAPI;
    }

  }

  ngAfterViewInit(): void {
    this.setCurrentConnection();
    this.setCurrentAction();
    this.isLoading = false;
  }

  /**
   * Função que irá instanciar os components Card na tela, com os dados dos itens.
   * @param itemsDisplayed Array com os itens que serão apresentados. @example [{"name":"Marie", "age":22}, {"name":"Josef", "age":32}]
   */
  createItemsOnList(itemsDisplayed: any[], itemDisplayedOnSubFormType: string[], objectDisplayedValue: string[], attributesOnSubForm: any[] = []) {
    this.componentsCreatedList = [];
    this.target.clear();

    for (let index = 0; index < itemsDisplayed.length; index++) {

      let componentCreated;

      componentCreated = this.target.createComponent(SelectableCardComponent).instance;
      this.componentsCreatedList.push(componentCreated);

      componentCreated.columnsQuantity = this.columnsQuantity;
      componentCreated.userConfig = this.userConfig;
      componentCreated.itemDisplayed = this.objectTratament(itemsDisplayed[index]);

      componentCreated.displayedfieldsName = this.displayedfieldsName;
      componentCreated.fieldsType = itemDisplayedOnSubFormType;
      componentCreated.objectDisplayedValue = objectDisplayedValue;
      componentCreated.attributes = attributesOnSubForm;
      componentCreated.classFather = this.className;
      componentCreated.isSubForm = true;

      componentCreated.className = this.className;

      componentCreated.isEditable = this.isAbleToEdit;
      componentCreated.eventClickToEdit.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => { this.editItem(data) });
      this.selectItem(componentCreated);

    }

  }

  selectItem(componentCreated: SelectableCardComponent) {
    componentCreated.eventOnSelect.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.checkItem(this.selectedItemsLimit, componentCreated, data);
    });
  }

  checkItem(selectedItemsLimit: number, componentCreated: SelectableCardComponent, data) {
    const dataIsSelected: boolean = this.selectedItems.some(item => item === data);

    if (this.selectedItems.length == this.itemsDisplayed.length - 1) {
      this.selectAllCheckBox = true;
    }

    //Se o componente não foi selencionado
    if (dataIsSelected == false) {

      if (selectedItemsLimit != null) {
        //Se o limite de itens selecionados não foi ultrapassado
        if (this.selectedItems.length < selectedItemsLimit) {
          this.selectedItems.push(data);//Seleciona o item
          componentCreated.isSelected = true;
        }
      } else {
        this.selectedItems.push(data);
        componentCreated.isSelected = true;
      }

    } else {
      if (this.selectAllCheckBox == true) {
        this.selectAllCheckBox = false;
      }
      this.selectedItems = this.selectedItems.filter(item => item !== data);
      componentCreated.isSelected = false;
    }
  }

  /**
   * Encaminha para pagina de edição.
   * @param item Dados do item que será alterado. @example [{"name":"Marie", "age":22}.
   */
  editItem(item: any) {
    let nameClass = this.dataToCreatePage.attributes[this.index].className;
    nameClass = nameClass.charAt(0).toLowerCase() + nameClass.slice(1);

    let jsonPath = environment.jsonPath + nameClass + ".json";

    this.formGeneratorService.getJSONFromDicionario(jsonPath).pipe(takeUntil(this.ngUnsubscribe)).subscribe((JSONDictionary: any) => {

      const dialogRef = this.matDialog.open(FormSpaceBuildComponent, {
        data: {
          dataToCreatePage: JSONDictionary,
          currentFormAction: 'edit',
          submitFormFunction: this.submitEditForm.bind(this),
          itemToEdit: item,
          deleteFormFunction: (item: any) => {
            this.itemsDisplayed = this.itemsDisplayed.filter((element) => element.id != item.id);
            // this.createItemsOnList(this.itemsDisplayed);
          },
          returnFormFunction: () => {
            dialogRef.close();
          },
          //Ele normalmente recebe o resorceForm para pode preencher com cada campo de inserção com base no JSON
          //Ele ainda tem o emissõr que o terminou de preencher cada campo do resourceForm
        }
      })

      const instance = dialogRef.componentInstance as FormSpaceBuildComponent;

      instance.formIsReady.subscribe((isReady: boolean) => {
        if (isReady) {
          for(const key in item) {
            if(instance.resourceForm.controls[key]) {
              instance.resourceForm.controls[key].setValue(item[key]);
            } else {
              instance.resourceForm.addControl(key, new FormControl(item[key]));
            }
          }
        }
      });      
    }); 
  }

  submitEditForm(JSONDictionary: IPageStructure, item: any, itemEdited: any) {
    if (itemEdited == null) return;
    this.editSubFormOffline(JSONDictionary, item, itemEdited);
  }

  //TODO: Selector buga se nao selecionar ao editar
  editSubFormOffline(JSONDictionary: IPageStructure, item: any, itemEdited: any) {
    this.itemsDisplayed = this.itemsDisplayed.map((element) => {
      if (element === item) {
        return { ...element, ...itemEdited };
      }
      return element;
    });
    // this.createItemsOnList(this.itemsDisplayed);
    let valueToInput = {apiUrl: JSONDictionary.config.apiUrl, item: item};

    const currentValue = this.inputValue.value || [];
    this.inputValue.setValue([...currentValue, valueToInput]);
    let { itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm } = this.getAttributesToSubForm(JSONDictionary);
    this.createItemsOnList(this.itemsDisplayed, itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm);
    this.matDialog.closeAll();
  }
  
  /**
   * Abre o formulário em popUp/dialog tanto para criação.
   */
  openFormOnDialog() {
    let nameClass = this.dataToCreatePage.attributes[this.index].className;
    nameClass = nameClass.charAt(0).toLowerCase() + nameClass.slice(1);

    let jsonPath = environment.jsonPath + nameClass + ".json";

    this.formGeneratorService.getJSONFromDicionario(jsonPath).pipe(takeUntil(this.ngUnsubscribe)).subscribe((JSONDictionary: any) => {

      const dialogRef = this.matDialog.open(FormSpaceBuildComponent, {
        // width: '100vh',
        // height: '100vh',
        data: {
          dataToCreatePage: JSONDictionary,
          currentFormAction: 'new',
          submitFormFunction: this.submitForm.bind(this),
          formBuilder: this.resourceForm,
          deleteFormFunction: (item: any) => {
            this.itemsDisplayed = this.itemsDisplayed.filter((element) => element.id != item.id);
            // this.createItemsOnList(this.itemsDisplayed);
            this.inputValue.setValue(this.itemsDisplayed);
          },
          returnFormFunction: () => {
            dialogRef.close();
          }
        }
      })      
    }); 
  }

  submitForm(JSONDictionary: IPageStructure, item: any) {
    if (item == null) return;
    this.createSubFormOffline(JSONDictionary, item);
  }
    
  /**
   * Realizar uma alteração nos dados do formulário, removendo objetos e substituindo somente pelos IDs
   * @param item Formulário
   */
  objectTratament(item){
    for(let field in item){
      if(item[field] instanceof Object){
        if(item[field] instanceof Array){
          item[field] = item[field].map((value) => value.id == undefined || value.id == null ? value : value.id);
        } else {
          if(item[field].id == undefined || item[field].id == null){
            continue;
          }
          item[field] = item[field].id;
        }
      }
    }
    return item;
  }

  createSubFormOffline(JSONDictionary: IPageStructure, item: any) {
    this.itemsDisplayed.push(item);
    let { itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm } = this.getAttributesToSubForm(JSONDictionary);
    this.createItemsOnList(this.itemsDisplayed, itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm);
    let valueToInput = {item: item, apiUrl: JSONDictionary.config.apiUrl, fatherName: this.getFatherReferenceName(JSONDictionary)};

    const currentValue = this.inputValue.value || [];
    this.inputValue.setValue([...currentValue, valueToInput]);
    this.matDialog.closeAll();
  }

  deleteSubForm(items: any[]) {
    let confirmation = confirm("Deseja realmente deletar os itens selecionados?");
    if (!confirmation) return;
    items.forEach((item) => {
      let nameClass = this.dataToCreatePage.attributes[this.index].className;
      nameClass = nameClass.charAt(0).toLowerCase() + nameClass.slice(1);

      let jsonPath = environment.jsonPath + nameClass + ".json";

      this.formGeneratorService.getJSONFromDicionario(jsonPath).pipe(takeUntil(this.ngUnsubscribe)).subscribe((JSONDictionary: IPageStructure) => {
          this.deleteSubFormOffline(JSONDictionary, item);
      });
    });
  }

  deleteSubFormOffline(JSONDictionary: IPageStructure, item: any) {
    //TODO: Pode dar erro se tiverem dois itens iguais
    this.itemsDisplayed = this.itemsDisplayed.filter((element) => element != item);
    let { itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm } = this.getAttributesToSubForm(JSONDictionary);
    this.createItemsOnList(this.itemsDisplayed, itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm);
  }

  private getAttributesToSubForm(JSONDictionary: IPageStructure) {
    let itemDisplayedOnSubFormType = [];
    let objectDisplayedValueOnSubForm = [];
    let attributesOnSubForm = [];
    
    JSONDictionary.attributes.forEach((element) => {
      itemDisplayedOnSubFormType.push(element.type);
      objectDisplayedValueOnSubForm.push(element.fieldDisplayedInLabel);
      attributesOnSubForm.push(element);
    });

    return { itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm };
  }

  
  private setCurrentAction() {
    if (this.activatedRoute.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else{
      this.currentAction = "edit";
      this.displayDataOnEdit();
    }
  }

  private displayDataOnEdit() {
    this.inputValue.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.itemsDisplayed = data;
      console.log("SUBFORM >", data);
      const { itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm } = this.getAttributesToSubForm(this.dataToCreatePage);
      this.createItemsOnList(this.itemsDisplayed, itemDisplayedOnSubFormType, objectDisplayedValueOnSubForm, attributesOnSubForm);
      this.eventSelectedValues.emit(data);
    });
  }


  private setCurrentConnection() {
    this.isOnline = this.onlineOfflineService.isOnline;

    this.onlineOfflineService.onlineStatus$.subscribe((status: boolean) => {
      this.isOnline = status;
    });
  }

  private getFatherReferenceName(JSONDictionary: IPageStructure) {
    for(let attribute of JSONDictionary.attributes){
      if(attribute.className == this.className){
        return attribute.name;
      }
    }
  }
}
