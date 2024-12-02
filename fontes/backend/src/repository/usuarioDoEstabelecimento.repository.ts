import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { UsuarioDoEstabelecimento } from "../models/usuarioDoEstabelecimento.model"; 
import BaseRepository from "./base.repository"; 

export default class UsuarioDoEstabelecimentoRepository extends BaseRepository<UsuarioDoEstabelecimento>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<UsuarioDoEstabelecimento> = createDbAdapter<UsuarioDoEstabelecimento>(dbType, model, UsuarioDoEstabelecimento.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
