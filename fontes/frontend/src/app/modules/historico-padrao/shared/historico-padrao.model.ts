import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";
import { PlanoDeContas } from "app/modules/plano-de-contas/shared/plano-de-contas.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class HistoricoPadrao extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    nome?: string;
    codigoEcd?: string;
    contaDebito?: PlanoDeContas;
    contaCredito?: PlanoDeContas;
    ativo?: boolean;

    static fromJson(jsonData: any): HistoricoPadrao{ 
        return Object.assign(new HistoricoPadrao(), jsonData); 
    } 
}

