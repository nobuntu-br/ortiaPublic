import { DbType } from "../adapters/createDb.adapter";
import EstabelecimentoRepository from "../repository/estabelecimento.repository";
import { Estabelecimento } from "../models/estabelecimento.model"; 
import BaseService from "./base.service";

export class EstabelecimentoService extends BaseService<Estabelecimento>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : EstabelecimentoRepository = new EstabelecimentoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
