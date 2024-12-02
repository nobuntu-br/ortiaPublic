import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";
import { TabelaMoeda } from "app/modules/tabela-moeda/shared/tabela-moeda.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class CotacaoMoeda extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    moeda?: TabelaMoeda;
    inicioCotacao?: Date;
    valorCompraOficial?: number;
    valorVendaOficial?: number;
    valorCompraParalelo?: number;
    valorVendaParalelo?: number;
    valorInterno?: number;
    ativo?: boolean;

    static fromJson(jsonData: any): CotacaoMoeda{ 
        return Object.assign(new CotacaoMoeda(), jsonData); 
    } 
}

