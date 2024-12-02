import { DbType } from "../adapters/createDb.adapter";
import EmpreendimentoRepository from "../repository/empreendimento.repository";
import { Empreendimento } from "../models/empreendimento.model"; 
import BaseService from "./base.service";

export class EmpreendimentoService extends BaseService<Empreendimento>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : EmpreendimentoRepository = new EmpreendimentoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
