import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 


interface IPlanoDeContas { 
  empreendimento?: Empreendimento
  codigoConta?: string
  codigoNatureza?: string
  indicadorConta?: string
  nivel?: number
  nome?: string
  ativo?: boolean
} 
export class PlanoDeContas extends BaseResourceModel implements IPlanoDeContas{ 
  empreendimento?: Empreendimento
  codigoConta?: string
  codigoNatureza?: string
  indicadorConta?: string
  nivel?: number
  nome?: string
  ativo?: boolean

  static fromJson(jsonData: any) : PlanoDeContas { 
    return Object.assign(new PlanoDeContas(), jsonData); 
  } 
}
