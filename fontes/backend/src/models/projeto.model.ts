import { BaseResourceModel } from "./base-resource.model" 
import { Empreendimento } from "./empreendimento.model"; 


interface IProjeto { 
  empreendimento?: Empreendimento
  nome?: string
  situacao?: string
  dataConcCanc?: Date
} 
export class Projeto extends BaseResourceModel implements IProjeto{ 
  empreendimento?: Empreendimento
  nome?: string
  situacao?: string
  dataConcCanc?: Date

  static fromJson(jsonData: any) : Projeto { 
    return Object.assign(new Projeto(), jsonData); 
  } 
}
