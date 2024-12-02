import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Indicador extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    nome?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): Indicador{ 
        return Object.assign(new Indicador(), jsonData); 
    } 
}

