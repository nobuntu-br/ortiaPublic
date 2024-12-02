import { Estabelecimento } from "app/modules/estabelecimento/shared/estabelecimento.model";
import { EstruturaDoOrcamento } from "app/modules/estrutura-do-orcamento/shared/estrutura-do-orcamento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class PlanilhaDoOrcamento extends BaseResourceModel {
    id?: any;
    estabelecimento?: Estabelecimento;
    nome?: string;
    ativo?: boolean;
    EstruturaDoOrcamento?: EstruturaDoOrcamento[];

    static fromJson(jsonData: any): PlanilhaDoOrcamento{ 
        return Object.assign(new PlanilhaDoOrcamento(), jsonData); 
    } 
}

