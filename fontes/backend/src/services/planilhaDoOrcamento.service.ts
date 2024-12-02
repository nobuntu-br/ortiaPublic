import { DbType } from "../adapters/createDb.adapter";
import PlanilhaDoOrcamentoRepository from "../repository/planilhaDoOrcamento.repository";
import { PlanilhaDoOrcamento } from "../models/planilhaDoOrcamento.model"; 
import BaseService from "./base.service";

export class PlanilhaDoOrcamentoService extends BaseService<PlanilhaDoOrcamento>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : PlanilhaDoOrcamentoRepository = new PlanilhaDoOrcamentoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
