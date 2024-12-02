import { PlanilhaDoOrcamento } from "app/modules/planilha-do-orcamento/shared/planilha-do-orcamento.model";
import { FuncaoDePrevisao } from "app/modules/funcao-de-previsao/shared/funcao-de-previsao.model";
import { PlanoDeContas } from "app/modules/plano-de-contas/shared/plano-de-contas.model";
import { HistoricoPadrao } from "app/modules/historico-padrao/shared/historico-padrao.model";
import { CentroDeCusto } from "app/modules/centro-de-custo/shared/centro-de-custo.model";
import { Projeto } from "app/modules/projeto/shared/projeto.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class EstruturaDoOrcamento extends BaseResourceModel {
    id?: any;
    PlanilhaDoOrcamento?: PlanilhaDoOrcamento;
    nome?: string;
    funcaoPrevisao?: FuncaoDePrevisao;
    contaDebito?: PlanoDeContas;
    contaCredito?: PlanoDeContas;
    historicoPadrao?: HistoricoPadrao;
    centroDeCusto?: CentroDeCusto;
    projeto?: Projeto;
    ativo?: boolean;

    static fromJson(jsonData: any): EstruturaDoOrcamento{ 
        return Object.assign(new EstruturaDoOrcamento(), jsonData); 
    } 
}

