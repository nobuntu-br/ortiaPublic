import { DbType } from "../adapters/createDb.adapter";
import TabelaMoedaRepository from "../repository/tabelaMoeda.repository";
import { TabelaMoeda } from "../models/tabelaMoeda.model"; 
import BaseService from "./base.service";

export class TabelaMoedaService extends BaseService<TabelaMoeda>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : TabelaMoedaRepository = new TabelaMoedaRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
