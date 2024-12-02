import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 
import { PlanoDeContas } from "./planoDeContas.model"; 


interface IHistoricoPadrao { 
  empreendimento?: Empreendimento
  nome?: string
  codigoEcd?: string
  contaDebito?: PlanoDeContas
  contaCredito?: PlanoDeContas
  ativo?: boolean
} 
export class HistoricoPadrao extends BaseResourceModel implements IHistoricoPadrao{ 
  empreendimento?: Empreendimento
  nome?: string
  codigoEcd?: string
  contaDebito?: PlanoDeContas
  contaCredito?: PlanoDeContas
  ativo?: boolean

  static fromJson(jsonData: any) : HistoricoPadrao { 
    return Object.assign(new HistoricoPadrao(), jsonData); 
  } 
}
