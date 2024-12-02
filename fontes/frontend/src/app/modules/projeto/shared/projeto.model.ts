import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Projeto extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    nome?: string;
    situacao?: string;
    dataConcCanc?: Date;

    static fromJson(jsonData: any): Projeto{ 
        return Object.assign(new Projeto(), jsonData); 
    } 
}

