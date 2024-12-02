import { DbType } from "../adapters/createDb.adapter";
import LancamentoContabilRepository from "../repository/lancamentoContabil.repository";
import { LancamentoContabil } from "../models/lancamentoContabil.model"; 
import BaseService from "./base.service";

export class LancamentoContabilService extends BaseService<LancamentoContabil>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : LancamentoContabilRepository = new LancamentoContabilRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
