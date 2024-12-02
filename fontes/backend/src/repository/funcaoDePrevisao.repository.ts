import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { FuncaoDePrevisao } from "../models/funcaoDePrevisao.model"; 
import BaseRepository from "./base.repository"; 

export default class FuncaoDePrevisaoRepository extends BaseRepository<FuncaoDePrevisao>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<FuncaoDePrevisao> = createDbAdapter<FuncaoDePrevisao>(dbType, model, FuncaoDePrevisao.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
