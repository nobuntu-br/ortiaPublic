import { DbType } from "../adapters/createDb.adapter";
import ConsultaLivroRazaoRepository from "../repository/consultaLivroRazao.repository";
import { ConsultaLivroRazao } from "../models/consultaLivroRazao.model"; 
import BaseService from "./base.service";

export class ConsultaLivroRazaoService extends BaseService<ConsultaLivroRazao>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : ConsultaLivroRazaoRepository = new ConsultaLivroRazaoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
