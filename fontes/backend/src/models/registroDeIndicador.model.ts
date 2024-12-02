import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 
import { Indicador } from "./indicador.model"; 


interface IRegistroDeIndicador { 
  empreendimento?: Empreendimento
  indicador?: Indicador
  dataReferencia?: Date
  valorIndicador?: number
  ativo?: boolean
} 
export class RegistroDeIndicador extends BaseResourceModel implements IRegistroDeIndicador{ 
  empreendimento?: Empreendimento
  indicador?: Indicador
  dataReferencia?: Date
  valorIndicador?: number
  ativo?: boolean

  static fromJson(jsonData: any) : RegistroDeIndicador { 
    return Object.assign(new RegistroDeIndicador(), jsonData); 
  } 
}
