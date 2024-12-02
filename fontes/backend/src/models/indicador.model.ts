import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 


interface IIndicador { 
  empreendimento?: Empreendimento
  nome?: string
  ativo?: boolean
} 
export class Indicador extends BaseResourceModel implements IIndicador{ 
  empreendimento?: Empreendimento
  nome?: string
  ativo?: boolean

  static fromJson(jsonData: any) : Indicador { 
    return Object.assign(new Indicador(), jsonData); 
  } 
}
