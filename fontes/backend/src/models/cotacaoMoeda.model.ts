import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 
import { TabelaMoeda } from "./tabelaMoeda.model"; 


interface ICotacaoMoeda { 
  empreendimento?: Empreendimento
  moeda?: TabelaMoeda
  inicioCotacao?: Date
  valorCompraOficial?: number
  valorVendaOficial?: number
  valorCompraParalelo?: number
  valorVendaParalelo?: number
  valorInterno?: number
  ativo?: boolean
} 
export class CotacaoMoeda extends BaseResourceModel implements ICotacaoMoeda{ 
  empreendimento?: Empreendimento
  moeda?: TabelaMoeda
  inicioCotacao?: Date
  valorCompraOficial?: number
  valorVendaOficial?: number
  valorCompraParalelo?: number
  valorVendaParalelo?: number
  valorInterno?: number
  ativo?: boolean

  static fromJson(jsonData: any) : CotacaoMoeda { 
    return Object.assign(new CotacaoMoeda(), jsonData); 
  } 
}
