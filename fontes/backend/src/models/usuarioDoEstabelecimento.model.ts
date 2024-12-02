import { BaseResourceModel } from "./base-resource.model" 
import { Estabelecimento } from "./estabelecimento.model"; 


interface IUsuarioDoEstabelecimento { 
  estabelecimento?: Estabelecimento
  userPrototipo?: string
  tipoPermissao?: string
  ativo?: boolean
} 
export class UsuarioDoEstabelecimento extends BaseResourceModel implements IUsuarioDoEstabelecimento{ 
  estabelecimento?: Estabelecimento
  userPrototipo?: string
  tipoPermissao?: string
  ativo?: boolean

  static fromJson(jsonData: any) : UsuarioDoEstabelecimento { 
    return Object.assign(new UsuarioDoEstabelecimento(), jsonData); 
  } 
}
