import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class AreaDeNegocio extends BaseResourceModel {
    id?: any;
    nome?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): AreaDeNegocio{ 
        return Object.assign(new AreaDeNegocio(), jsonData); 
    } 
}

