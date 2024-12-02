import { BaseResourceModel } from "./base-resource.model" 
import { PlanilhaDoOrcamento } from "./planilhaDoOrcamento.model"; 
import { FuncaoDePrevisao } from "./funcaoDePrevisao.model"; 
import { PlanoDeContas } from "./planoDeContas.model"; 
import { HistoricoPadrao } from "./historicoPadrao.model"; 
import { CentroDeCusto } from "./centroDeCusto.model"; 
import { Projeto } from "./projeto.model"; 


interface IEstruturaDoOrcamento { 
  PlanilhaDoOrcamento?: PlanilhaDoOrcamento
  nome?: string
  funcaoPrevisao?: FuncaoDePrevisao
  contaDebito?: PlanoDeContas
  contaCredito?: PlanoDeContas
  historicoPadrao?: HistoricoPadrao
  centroDeCusto?: CentroDeCusto
  projeto?: Projeto
  ativo?: boolean
} 
export class EstruturaDoOrcamento extends BaseResourceModel implements IEstruturaDoOrcamento{ 
  PlanilhaDoOrcamento?: PlanilhaDoOrcamento
  nome?: string
  funcaoPrevisao?: FuncaoDePrevisao
  contaDebito?: PlanoDeContas
  contaCredito?: PlanoDeContas
  historicoPadrao?: HistoricoPadrao
  centroDeCusto?: CentroDeCusto
  projeto?: Projeto
  ativo?: boolean

  static fromJson(jsonData: any) : EstruturaDoOrcamento { 
    return Object.assign(new EstruturaDoOrcamento(), jsonData); 
  } 
}
