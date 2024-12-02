import { BaseResourceModel } from "./base-resource.model" 
import { LancamentoContabil } from "./lancamentoContabil.model"; 
import { HistoricoPadrao } from "./historicoPadrao.model"; 
import { CentroDeCusto } from "./centroDeCusto.model"; 
import { Projeto } from "./projeto.model"; 
import { PlanoDeContas } from "./planoDeContas.model"; 
import { TabelaMoeda } from "./tabelaMoeda.model"; 


interface IPartidaDoLancamento { 
  lancamentoContabil?: LancamentoContabil
  historicoPadrao?: HistoricoPadrao
  centroDeCusto?: CentroDeCusto
  projeto?: Projeto
  contaDebito?: PlanoDeContas
  contaCredito?: PlanoDeContas
  historico?: string
  valor?: number
  valorMoedaIndexada?: number
  valorCotacaoMoeda?: number
  moedaIndexada?: TabelaMoeda
} 
export class PartidaDoLancamento extends BaseResourceModel implements IPartidaDoLancamento{ 
  lancamentoContabil?: LancamentoContabil
  historicoPadrao?: HistoricoPadrao
  centroDeCusto?: CentroDeCusto
  projeto?: Projeto
  contaDebito?: PlanoDeContas
  contaCredito?: PlanoDeContas
  historico?: string
  valor?: number
  valorMoedaIndexada?: number
  valorCotacaoMoeda?: number
  moedaIndexada?: TabelaMoeda

  static fromJson(jsonData: any) : PartidaDoLancamento { 
    return Object.assign(new PartidaDoLancamento(), jsonData); 
  } 
}
