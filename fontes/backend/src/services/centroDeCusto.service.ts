import { DbType } from "../adapters/createDb.adapter";
import CentroDeCustoRepository from "../repository/centroDeCusto.repository";
import { CentroDeCusto } from "../models/centroDeCusto.model"; 
import BaseService from "./base.service";

export class CentroDeCustoService extends BaseService<CentroDeCusto>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : CentroDeCustoRepository = new CentroDeCustoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
