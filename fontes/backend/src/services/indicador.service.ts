import { DbType } from "../adapters/createDb.adapter";
import IndicadorRepository from "../repository/indicador.repository";
import { Indicador } from "../models/indicador.model"; 
import BaseService from "./base.service";

export class IndicadorService extends BaseService<Indicador>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : IndicadorRepository = new IndicadorRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
