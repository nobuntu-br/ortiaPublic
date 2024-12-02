import { Estabelecimento } from "app/modules/estabelecimento/shared/estabelecimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class UsuarioDoEstabelecimento extends BaseResourceModel {
    id?: any;
    estabelecimento?: Estabelecimento;
    userPrototipo?: string;
    tipoPermissao?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): UsuarioDoEstabelecimento{ 
        return Object.assign(new UsuarioDoEstabelecimento(), jsonData); 
    } 
}

