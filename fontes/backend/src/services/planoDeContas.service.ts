import { DbType } from "../adapters/createDb.adapter";
import PlanoDeContasRepository from "../repository/planoDeContas.repository";
import { PlanoDeContas } from "../models/planoDeContas.model"; 
import BaseService from "./base.service";

export class PlanoDeContasService extends BaseService<PlanoDeContas>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : PlanoDeContasRepository = new PlanoDeContasRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
