import { Empreendimento } from "app/modules/empreendimento/shared/empreendimento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class FuncaoDePrevisao extends BaseResourceModel {
    id?: any;
    empreendimento?: Empreendimento;
    nome?: string;
    tipoFuncao?: string;
    parametros?: string;
    formula?: string;
    ativo?: boolean;

    static fromJson(jsonData: any): FuncaoDePrevisao{ 
        return Object.assign(new FuncaoDePrevisao(), jsonData); 
    } 
}

