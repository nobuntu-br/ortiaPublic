import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class PlanoDeContas extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    codigoConta?: string;
    codigoNatureza?: string;
    indicadorConta?: string;
    nivel?: number;
    nome?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): PlanoDeContas{ 
        return Object.assign(new PlanoDeContas(), jsonData); 
    } 
}

