import { BaseResourceModel } from "./base-resource.model" 
import { TabelaMoeda } from "./tabelaMoeda.model"; 


interface IEmpreendimento { 
  nome?: string
  nomeFantasia?: string
  tipoPessoa?: string
  cnpjcpf?: string
  logomarca?: string
  moedaBase?: TabelaMoeda
  ativo?: boolean
} 
export class Empreendimento extends BaseResourceModel implements IEmpreendimento{ 
  nome?: string
  nomeFantasia?: string
  tipoPessoa?: string
  cnpjcpf?: string
  logomarca?: string
  moedaBase?: TabelaMoeda
  ativo?: boolean

  static fromJson(jsonData: any) : Empreendimento { 
    return Object.assign(new Empreendimento(), jsonData); 
  } 
}
