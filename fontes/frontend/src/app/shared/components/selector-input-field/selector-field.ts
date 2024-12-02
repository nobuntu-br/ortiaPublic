import { FormControl } from '@angular/forms';
import { FormField } from 'app/shared/models/form-field';
import { ICreateComponentParams } from 'app/shared/services/form-generator.service';
import { SelectorInputFieldComponent } from './selector-input-field.component';

export class SelectorField implements FormField {
	createFormField(createComponentData: ICreateComponentParams): FormControl {
        console.log("ValuesList: ", createComponentData.valuesList);

		let createdComponent = createComponentData.target.createComponent(SelectorInputFieldComponent);
        const component = createdComponent.instance;
        component.label = createComponentData.labelTittle;
        component.valuesList = createComponentData.optionList;
        component.selectItemsLimit = createComponentData.selectItemsLimit;
        component.ngAfterViewInit();
		return createdComponent.instance.inputValue;
	}
}