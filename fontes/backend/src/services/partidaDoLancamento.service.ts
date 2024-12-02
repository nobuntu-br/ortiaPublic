import { DbType } from "../adapters/createDb.adapter";
import PartidaDoLancamentoRepository from "../repository/partidaDoLancamento.repository";
import { PartidaDoLancamento } from "../models/partidaDoLancamento.model"; 
import BaseService from "./base.service";

export class PartidaDoLancamentoService extends BaseService<PartidaDoLancamento>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : PartidaDoLancamentoRepository = new PartidaDoLancamentoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
