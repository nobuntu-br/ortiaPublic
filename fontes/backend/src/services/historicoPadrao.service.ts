import { DbType } from "../adapters/createDb.adapter";
import HistoricoPadraoRepository from "../repository/historicoPadrao.repository";
import { HistoricoPadrao } from "../models/historicoPadrao.model"; 
import BaseService from "./base.service";

export class HistoricoPadraoService extends BaseService<HistoricoPadrao>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : HistoricoPadraoRepository = new HistoricoPadraoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
