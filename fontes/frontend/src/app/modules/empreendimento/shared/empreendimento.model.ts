import { TabelaMoeda } from "app/modules/tabela-moeda/shared/tabela-moeda.model";
import { Estabelecimento } from "app/modules/estabelecimento/shared/estabelecimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Empreendimento extends BaseResourceModel {
    id?: any;
    nome?: string;
    nomeFantasia?: string;
    tipoPessoa?: string;
    cnpjcpf?: string;
    logomarca?: string;
    moedaBase?: TabelaMoeda;
    ativo?: boolean;
    Estabelecimentos?: Estabelecimento[];

    static fromJson(jsonData: any): Empreendimento{ 
        return Object.assign(new Empreendimento(), jsonData); 
    } 
}

