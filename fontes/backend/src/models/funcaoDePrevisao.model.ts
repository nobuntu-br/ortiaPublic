import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 


interface IFuncaoDePrevisao { 
  empreendimento?: Empreendimento
  nome?: string
  tipoFuncao?: string
  parametros?: string
  formula?: string
  ativo?: boolean
} 
export class FuncaoDePrevisao extends BaseResourceModel implements IFuncaoDePrevisao{ 
  empreendimento?: Empreendimento
  nome?: string
  tipoFuncao?: string
  parametros?: string
  formula?: string
  ativo?: boolean

  static fromJson(jsonData: any) : FuncaoDePrevisao { 
    return Object.assign(new FuncaoDePrevisao(), jsonData); 
  } 
}
