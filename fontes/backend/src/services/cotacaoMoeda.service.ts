import { DbType } from "../adapters/createDb.adapter";
import CotacaoMoedaRepository from "../repository/cotacaoMoeda.repository";
import { CotacaoMoeda } from "../models/cotacaoMoeda.model"; 
import BaseService from "./base.service";

export class CotacaoMoedaService extends BaseService<CotacaoMoeda>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : CotacaoMoedaRepository = new CotacaoMoedaRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
