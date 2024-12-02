import { DbType } from "../adapters/createDb.adapter";
import AreaDeNegocioRepository from "../repository/areaDeNegocio.repository";
import { AreaDeNegocio } from "../models/areaDeNegocio.model"; 
import BaseService from "./base.service";

export class AreaDeNegocioService extends BaseService<AreaDeNegocio>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : AreaDeNegocioRepository = new AreaDeNegocioRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
