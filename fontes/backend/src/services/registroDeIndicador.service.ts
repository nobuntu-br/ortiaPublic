import { DbType } from "../adapters/createDb.adapter";
import RegistroDeIndicadorRepository from "../repository/registroDeIndicador.repository";
import { RegistroDeIndicador } from "../models/registroDeIndicador.model"; 
import BaseService from "./base.service";

export class RegistroDeIndicadorService extends BaseService<RegistroDeIndicador>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : RegistroDeIndicadorRepository = new RegistroDeIndicadorRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
