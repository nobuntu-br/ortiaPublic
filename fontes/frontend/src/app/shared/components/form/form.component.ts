import { HttpClient } from '@angular/common/http';
import { OnInit, AfterContentChecked, Injector, Directive, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslocoService } from '@ngneat/transloco';
import { Estabelecimento } from 'app/modules/estabelecimento/shared/estabelecimento.model';
import { EstabelecimentoService } from 'app/modules/estabelecimento/shared/estabelecimento.service';
import { BaseResourceModel } from 'app/shared/models/base-resource.model';
import { LocalStorageFormService } from 'app/shared/services/local-storage-form.service';
import { BaseResourceService } from 'app/shared/services/shared.service';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from "rxjs/operators";

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked, OnDestroy {

  /**
   * Ação atual que o formulário está fazendo, seja alterando algo ou criando.
   * @example "new" ou "edit"
   */
  currentAction: string;
  /**
   * formuário que armazenará os dados.
   */
  resourceForm: FormGroup;
  /**
   * Título da pagina.
   * @example "Caixas"
   */
  pageTitle: string;
  serverErrorMessages: string[] = null;

  submittingForm: boolean = false;
  /**
   * O localStorage será usado para armazenar dados do formulário enquanto estiver sendo preenchido.
   * @example "true" ou "false"
   */
  localStorageIsEnabled: boolean = false;
  /**
   * Indica se os dados do formulário foram alterados
   * @example "true" ou "false"
   */
  formSaved: boolean = false;
  /**
   * Subject responsável por remover os observadores que estão rodando na pagina no momento do componente ser deletado.
   */
  ngUnsubscribe = new Subject();

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected http: HttpClient;
  /**
   * Service que opera as funções de armazenamento de dados do formuário no local storage
   */
  protected localStorageFormService: LocalStorageFormService;
  private translocoService: TranslocoService;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
    this.http = this.injector.get(HttpClient);

    this.localStorageFormService = this.injector.get(LocalStorageFormService);
    this.translocoService = this.injector.get(TranslocoService);
  }

  ngOnInit() {
    this.setCurrentAction();

    // TODO a funcionalidade de carregar dados do localstorage precisa ser atualizado
    // if (this.localStorageIsEnabled) {
    //   this.loadResorceWithLocalStorage();
    // } else {
    //   this.loadResource();
    // }

    this.verifyFormValueChanges();

  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;
    console.log("Formulário enviado: ", this.resourceForm.value);
    if (this.currentAction == "new"){
      //TODO: achar uma forma de encontrar o filho
      this.submitFormWithChild();
      // this.createResource();
    }
    else // currentAction == "edit"
      this.updateResource();
  }

  /** 
   * Envia os dados do formulário para a API e salva os dados dos filhos no banco de dados
   * @param childrenData Dados dos filhos que serão salvos no banco de dados
   */
  submitFormWithChild() {
    let childrenData = [];
    this.submittingForm = true;
    for(let field in this.resourceForm.value){
      if(this.resourceForm.value[field] instanceof Array){
        for(let i = 0; i < this.resourceForm.value[field].length; i++){
          if(this.resourceForm.value[field][i].fatherName){
            childrenData.push({item: this.resourceForm.value[field][i].item, apiUrl: this.resourceForm.value[field][i].apiUrl, fatherName: this.resourceForm.value[field][i].fatherName});
          }
        }
      }
    }
    if (this.currentAction == "new"){
      this.objectTratament(this.resourceForm.value);
    
      const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
  
      this.resourceService.create(resource).subscribe({
        next: (response) => {
          const className = (this.resource.constructor as any).name;
          this.localStorageFormService.remove("new"+className);
          if(childrenData.length == 0){
            this.actionsForSuccess(response);
            return;
          }
          //salvar os childrenData no banco de dados usando o id da entidade pai que foi salva antes
          for(let i = 0; i < childrenData.length; i++){
            childrenData[i].item[className] = response.id;
            let url = environment.backendUrl + '/' + childrenData[i].apiUrl;
            this.objectTratament(childrenData[i].item);
            this.http.post(url, childrenData[i].item).subscribe({
              next: (response) => {
                console.log("Response: ", response);
              },
              error: (error) => console.log("Error: ", error)
            });
          }
          this.actionsForSuccess(response);
        },
        error: (error) => this.actionsForError(error)
      });
    }
    else // currentAction == "edit"
      this.updateResource();
  }


  // PRIVATE METHODS

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  private loadResorceWithLocalStorage() {
    const resourceId = this.route.snapshot.params['id'];
    const className = (this.resource.constructor as any).name;

    const dataStoredInLocalStore = this.localStorageFormService.getDataFromLocalStorage(resourceId, className, this.currentAction);

    if (dataStoredInLocalStore != null) {
      this.resourceForm.patchValue(dataStoredInLocalStore);
    } else {
      this.loadResource();
    }
    this.localStorageFormService.saveInLocalStorageOnEachChange(resourceId, className, this.resourceForm, this.currentAction);
  }

  /**
   * Realiza a requisição para obter o objeto da API.
   * Em caso no qual a pagina irá editar (currentAction == "edit"), será obtido o objeto da API para o formulário  
   */
  protected loadResource(): any {
    if (this.currentAction == "edit") {
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(params.get("id")))
      )
        .subscribe({
          next: (resource) => {
            this.resource = resource;
            //TODO usar transloco nessas mensagens
            if (this.resourceForm == null) { console.error("ResourceForm não foi instanciado") }
            this.resourceForm.addControl("updatedAt", this.formBuilder.control(null));
            // console.log("Dados do recurso obtidos da API: ", resource);
            this.resourceForm.patchValue(resource); // binds loaded resource data to resourceForm
          },
          error: (error) => alert(this.translocoService.translate("componentsBase.Alerts.readErrorMessage"))
        })
    }
  }

  protected setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = this.creationPageTitle();
    else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return "Novo"
  }

  protected editionPageTitle(): string {
    return "Edição"
  }

  protected createResource() {
    this.objectTratament(this.resourceForm.value);
    
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.create(resource).subscribe({
      next: (response) => {
        this.actionsForSuccess(response);
        const className = (this.resource.constructor as any).name;
        this.localStorageFormService.remove("new"+className);
      },
      error: (error) => this.actionsForError(error)
    });
  }

  protected updateResource() {

    this.objectTratament(this.resourceForm.value);

    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(resource.id, resource).subscribe({
      next: (response) => this.actionsForSuccess(response),
      error: (error) => this.actionsForError(error)
    });
  }

  /**
   * Realizar uma alteração nos dados do formulário, removendo objetos e substituindo somente pelos IDs
   * @param resourceForm Formulário
   */
  objectTratament(resourceForm){
    for(let field in resourceForm){
      if(resourceForm[field] instanceof Object){
        // console.log("é um objeto o campo: ", resourceForm[field]);
        if(resourceForm[field] instanceof Array){
          resourceForm[field] = resourceForm[field].map((value) => value.id == undefined || value.id == null ? value : value.id);
        } else {
          if(resourceForm[field].id == undefined || resourceForm[field].id == null){
            continue;
          }
          resourceForm[field] = resourceForm[field].id;
        }
      }
    }
  }

  protected deleteResource() {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.delete(resource.id).subscribe({
      next: (response) => this.actionsForSuccess(response),
      error: (error) => this.actionsForError(error)
    });
  }

  protected actionsForSuccess(resource: T) {
    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

    alert(this.translocoService.translate("componentsBase.Alerts.defaultSuccessMessage"));

    // redirect/reload component page
    this.router.navigateByUrl(baseComponentPath, { skipLocationChange: false }).then(
      // () => this.router.navigate([baseComponentPath, resource.id, "edit"]) //Nesse caso, ao criar ou editar ele ficará na mesma pagina
      () => this.router.navigate([baseComponentPath])
    )
  }

  protected actionsForError(error) {

    this.submittingForm = false;
    if(error.status === 400){
      alert(error.error.errors)
      return
    }
    alert(this.translocoService.translate("componentsBase.Alerts.defaultErrorMessage"));

    if (error.status === 422)
      this.serverErrorMessages = JSON.parse(error._body).errors;
    else
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
  }

  protected abstract buildResourceForm(): void;

  protected verifyFormValueChanges(){
    this.resourceForm.valueChanges.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next:(data) => this.formSaved = false, 
    });
  }

  returnFormFunction(){
    this.alertToReturn();
    
  }

  alertToReturn(){
    if(this.formSaved == true) return;

    alert(this.translocoService.translate("componentsBase.Alerts.rememberToSave"));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}