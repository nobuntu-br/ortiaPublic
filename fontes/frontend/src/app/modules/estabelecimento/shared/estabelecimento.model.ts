import { AreaDeNegocio } from "app/modules/area-de-negocio/shared/area-de-negocio.model";
import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Estabelecimento extends BaseResourceModel {
    id?: any;
    areaDeNegocio?: AreaDeNegocio;
    empreendimento?: Empreendimento;
    nome?: string;
    nomeFantasia?: string;
    tipoPessoa?: string;
    cnpjcpf?: string;
    logomarca?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): Estabelecimento{ 
        return Object.assign(new Estabelecimento(), jsonData); 
    } 
}

