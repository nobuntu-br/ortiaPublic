import { DbType } from "../adapters/createDb.adapter";
import FuncaoDePrevisaoRepository from "../repository/funcaoDePrevisao.repository";
import { FuncaoDePrevisao } from "../models/funcaoDePrevisao.model"; 
import BaseService from "./base.service";

export class FuncaoDePrevisaoService extends BaseService<FuncaoDePrevisao>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : FuncaoDePrevisaoRepository = new FuncaoDePrevisaoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
