import { Estabelecimento } from "app/modules/estabelecimento/shared/estabelecimento.model";
import { EstruturaDoOrcamento } from "app/modules/estrutura-do-orcamento/shared/estrutura-do-orcamento.model";
import { PartidaDoLancamento } from "app/modules/partida-do-lancamento/shared/partida-do-lancamento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class LancamentoContabil extends BaseResourceModel {
    id?: any;
    estabelecimento?: Estabelecimento;
    EstruturaDoOrcamento?: EstruturaDoOrcamento;
    formaLancamento?: string;
    tipoLancamento?: string;
    numeroLancamentoEcd?: string;
    dataLancamento?: Date;
    indicadorLancamento?: string;
    ativo?: boolean;
    PartidasdoLancamento?: PartidaDoLancamento[];

    static fromJson(jsonData: any): LancamentoContabil{ 
        return Object.assign(new LancamentoContabil(), jsonData); 
    } 
}

