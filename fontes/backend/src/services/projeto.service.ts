import { DbType } from "../adapters/createDb.adapter";
import ProjetoRepository from "../repository/projeto.repository";
import { Projeto } from "../models/projeto.model"; 
import BaseService from "./base.service";

export class ProjetoService extends BaseService<Projeto>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : ProjetoRepository = new ProjetoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
