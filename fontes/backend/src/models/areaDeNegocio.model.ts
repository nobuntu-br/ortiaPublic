import { BaseResourceModel } from "./base-resource.model" 


interface IAreaDeNegocio { 
  nome?: string
  ativo?: boolean
} 
export class AreaDeNegocio extends BaseResourceModel implements IAreaDeNegocio{ 
  nome?: string
  ativo?: boolean

  static fromJson(jsonData: any) : AreaDeNegocio { 
    return Object.assign(new AreaDeNegocio(), jsonData); 
  } 
}
