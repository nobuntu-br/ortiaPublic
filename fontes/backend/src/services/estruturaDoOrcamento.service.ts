import { DbType } from "../adapters/createDb.adapter";
import EstruturaDoOrcamentoRepository from "../repository/estruturaDoOrcamento.repository";
import { EstruturaDoOrcamento } from "../models/estruturaDoOrcamento.model"; 
import BaseService from "./base.service";

export class EstruturaDoOrcamentoService extends BaseService<EstruturaDoOrcamento>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : EstruturaDoOrcamentoRepository = new EstruturaDoOrcamentoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
