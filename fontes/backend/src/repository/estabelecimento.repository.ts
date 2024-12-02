import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Estabelecimento } from "../models/estabelecimento.model"; 
import BaseRepository from "./base.repository"; 

export default class EstabelecimentoRepository extends BaseRepository<Estabelecimento>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<Estabelecimento> = createDbAdapter<Estabelecimento>(dbType, model, Estabelecimento.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
