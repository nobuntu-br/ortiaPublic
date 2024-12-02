import { BaseResourceModel } from "./base-resource.model" 
import { Estabelecimento } from "./estabelecimento.model"; 
import { EstruturaDoOrcamento } from "./estruturaDoOrcamento.model"; 


interface ILancamentoContabil { 
  estabelecimento?: Estabelecimento
  EstruturaDoOrcamento?: EstruturaDoOrcamento
  formaLancamento?: string
  tipoLancamento?: string
  numeroLancamentoEcd?: string
  dataLancamento?: Date
  indicadorLancamento?: string
  ativo?: boolean
} 
export class LancamentoContabil extends BaseResourceModel implements ILancamentoContabil{ 
  estabelecimento?: Estabelecimento
  EstruturaDoOrcamento?: EstruturaDoOrcamento
  formaLancamento?: string
  tipoLancamento?: string
  numeroLancamentoEcd?: string
  dataLancamento?: Date
  indicadorLancamento?: string
  ativo?: boolean

  static fromJson(jsonData: any) : LancamentoContabil { 
    return Object.assign(new LancamentoContabil(), jsonData); 
  } 
}
