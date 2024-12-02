import { BaseResourceModel } from "./base-resource.model" 


interface ITabelaMoeda { 
  nome?: string
  codigoBC?: string
  simbolo?: string
  siglaBC?: string
  codigoPais?: string
  codigoISO?: string
  siglaISO?: string
  ativo?: boolean
} 
export class TabelaMoeda extends BaseResourceModel implements ITabelaMoeda{ 
  nome?: string
  codigoBC?: string
  simbolo?: string
  siglaBC?: string
  codigoPais?: string
  codigoISO?: string
  siglaISO?: string
  ativo?: boolean

  static fromJson(jsonData: any) : TabelaMoeda { 
    return Object.assign(new TabelaMoeda(), jsonData); 
  } 
}
