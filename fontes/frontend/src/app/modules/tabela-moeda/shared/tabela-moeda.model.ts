import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class TabelaMoeda extends BaseResourceModel {
    id?: any;
    nome?: string;
    codigoBC?: string;
    simbolo?: string;
    siglaBC?: string;
    codigoPais?: string;
    codigoISO?: string;
    siglaISO?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): TabelaMoeda{ 
        return Object.assign(new TabelaMoeda(), jsonData); 
    } 
}

