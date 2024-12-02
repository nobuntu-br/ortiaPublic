import { BaseResourceModel } from "./base-resource.model" 


interface IConsultaLivroRazao { 
} 
export class ConsultaLivroRazao extends BaseResourceModel implements IConsultaLivroRazao{ 

  static fromJson(jsonData: any) : ConsultaLivroRazao { 
    return Object.assign(new ConsultaLivroRazao(), jsonData); 
  } 
}
