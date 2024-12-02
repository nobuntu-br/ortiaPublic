import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 


interface ICentroDeCusto { 
  empreendimento?: Empreendimento
  nome?: string
  codigoEcd?: string
  ativo?: boolean
} 
export class CentroDeCusto extends BaseResourceModel implements ICentroDeCusto{ 
  empreendimento?: Empreendimento
  nome?: string
  codigoEcd?: string
  ativo?: boolean

  static fromJson(jsonData: any) : CentroDeCusto { 
    return Object.assign(new CentroDeCusto(), jsonData); 
  } 
}
