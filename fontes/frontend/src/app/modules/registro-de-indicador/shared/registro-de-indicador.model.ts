import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";
import { Indicador } from "app/modules/indicador/shared/indicador.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class RegistroDeIndicador extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    indicador?: Indicador;
    dataReferencia?: Date;
    valorIndicador?: number;
    ativo?: boolean;

    static fromJson(jsonData: any): RegistroDeIndicador{ 
        return Object.assign(new RegistroDeIndicador(), jsonData); 
    } 
}

