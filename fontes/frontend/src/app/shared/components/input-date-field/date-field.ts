import { FormControl } from '@angular/forms';
import { FormField } from '../../models/form-field';
import { InputDateFieldComponent } from './input-date-field.component';
import { ICreateComponentParams } from '../../services/form-generator.service';

export class DateField implements FormField {
  createFormField(createComponentData: ICreateComponentParams): FormControl {

    let createdComponent = createComponentData.target.createComponent(InputDateFieldComponent);
    createdComponent.instance.label = createComponentData.labelTittle;
    createdComponent.instance.isRequired = createComponentData.isRequired;
    createdComponent.instance.className = createComponentData.className;
    return createdComponent.instance.inputValue;
  }
}