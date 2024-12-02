import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { LancamentoContabil } from "../models/lancamentoContabil.model"; 
import BaseRepository from "./base.repository"; 

export default class LancamentoContabilRepository extends BaseRepository<LancamentoContabil>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<LancamentoContabil> = createDbAdapter<LancamentoContabil>(dbType, model, LancamentoContabil.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
