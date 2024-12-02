import { AfterViewInit, Component, Inject, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormFieldFactory } from 'app/shared/models/dinamic-form-factory';
import { FormField } from 'app/shared/models/form-field';
import { ICreateComponentParams } from 'app/shared/services/form-generator.service';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.scss']
})
export class ConsultaFormComponent implements AfterViewInit {

  constructor(private dialogRef: MatDialogRef<ConsultaFormComponent>, private formFieldFactory: DynamicFormFieldFactory, @Optional() @Inject(MAT_DIALOG_DATA) public data?: any) { }

  @ViewChild('placeToRender', { read: ViewContainerRef }) target!: ViewContainerRef;
  parameters: ICreateComponentParams[] = this.data.parameters;
  resourceForm: FormGroup = this.data.resourceForm;
  submit: Function = this.data.submitFormFunction;


  ngAfterViewInit(): void {
    this.createForm();
  }

  createForm() {
    this.parameters.forEach((param) => {
      param.target = this.target;
      this.createComponent(param);
    });
  }
  
  createComponent(
    createComponentData: ICreateComponentParams
  ) {

    if (createComponentData.target == null) {
      console.error("Target vazia, não é possível criar a pagina");
      return null;
    }

    const formField: FormField = this.formFieldFactory.createFormFieldConsulta(createComponentData);

    this.resourceForm.addControl(createComponentData.className, formField.createFormField(createComponentData));
  }

  search() {
    this.data.submitFormFunction(this.objectTratament(this.resourceForm.value));
    this.dialogRef.close();
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


  cancel() {
    this.dialogRef.close();
  }

}
