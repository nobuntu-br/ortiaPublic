import { BaseResourceModel } from "./base-resource.model" 
import { AreaDeNegocio } from "./areaDeNegocio.model"; 
import { Empreendimento } from "./empreendimento.model"; 


interface IEstabelecimento { 
  areaDeNegocio?: AreaDeNegocio
  empreendimento?: Empreendimento
  nome?: string
  nomeFantasia?: string
  tipoPessoa?: string
  cnpjcpf?: string
  logomarca?: string
  ativo?: boolean
} 
export class Estabelecimento extends BaseResourceModel implements IEstabelecimento{ 
  areaDeNegocio?: AreaDeNegocio
  empreendimento?: Empreendimento
  nome?: string
  nomeFantasia?: string
  tipoPessoa?: string
  cnpjcpf?: string
  logomarca?: string
  ativo?: boolean

  static fromJson(jsonData: any) : Estabelecimento { 
    return Object.assign(new Estabelecimento(), jsonData); 
  } 
}
