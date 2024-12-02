import { DbType } from "../adapters/createDb.adapter";
import UsuarioDoEstabelecimentoRepository from "../repository/usuarioDoEstabelecimento.repository";
import { UsuarioDoEstabelecimento } from "../models/usuarioDoEstabelecimento.model"; 
import BaseService from "./base.service";

export class UsuarioDoEstabelecimentoService extends BaseService<UsuarioDoEstabelecimento>{

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    //Cria o repositório com dados para obter o banco de dados 
    var repository : UsuarioDoEstabelecimentoRepository = new UsuarioDoEstabelecimentoRepository(dbType, model, databaseConnection); 
    super(repository, dbType, model, databaseConnection); 
  } 

}
