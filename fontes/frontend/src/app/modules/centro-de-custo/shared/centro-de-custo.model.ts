import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class CentroDeCusto extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    nome?: string;
    codigoEcd?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): CentroDeCusto{ 
        return Object.assign(new CentroDeCusto(), jsonData); 
    } 
}

