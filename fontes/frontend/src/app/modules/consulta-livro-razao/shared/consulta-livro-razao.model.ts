import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class ConsultaLivroRazao extends BaseResourceModel {
    id?: any;

    static fromJson(jsonData: any): ConsultaLivroRazao{ 
        return Object.assign(new ConsultaLivroRazao(), jsonData); 
    } 
}

