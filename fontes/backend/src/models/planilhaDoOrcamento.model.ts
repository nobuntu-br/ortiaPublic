import { BaseResourceModel } from "./base-resource.model" 
import { Estabelecimento } from "./estabelecimento.model"; 


interface IPlanilhaDoOrcamento { 
  estabelecimento?: Estabelecimento
  nome?: string
  ativo?: boolean
} 
export class PlanilhaDoOrcamento extends BaseResourceModel implements IPlanilhaDoOrcamento{ 
  estabelecimento?: Estabelecimento
  nome?: string
  ativo?: boolean

  static fromJson(jsonData: any) : PlanilhaDoOrcamento { 
    return Object.assign(new PlanilhaDoOrcamento(), jsonData); 
  } 
}
