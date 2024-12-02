import { LancamentoContabil } from "app/modules/lancamento-contabil/shared/lancamento-contabil.model";
import { HistoricoPadrao } from "app/modules/historico-padrao/shared/historico-padrao.model";
import { CentroDeCusto } from "app/modules/centro-de-custo/shared/centro-de-custo.model";
import { Projeto } from "app/modules/projeto/shared/projeto.model";
import { PlanoDeContas } from "app/modules/plano-de-contas/shared/plano-de-contas.model";
import { TabelaMoeda } from "app/modules/tabela-moeda/shared/tabela-moeda.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class PartidaDoLancamento extends BaseResourceModel {
    id?: any;
    lancamentoContabil?: LancamentoContabil;
    historicoPadrao?: HistoricoPadrao;
    centroDeCusto?: CentroDeCusto;
    projeto?: Projeto;
    contaDebito?: PlanoDeContas;
    contaCredito?: PlanoDeContas;
    historico?: string;
    valor?: number;
    valorMoedaIndexada?: number;
    valorCotacaoMoeda?: number;
    moedaIndexada?: TabelaMoeda;

    static fromJson(jsonData: any): PartidaDoLancamento{ 
        return Object.assign(new PartidaDoLancamento(), jsonData); 
    } 
}

