import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { PartidaDoLancamento } from "../models/partidaDoLancamento.model"; 
import BaseRepository from "./base.repository"; 

export default class PartidaDoLancamentoRepository extends BaseRepository<PartidaDoLancamento>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<PartidaDoLancamento> = createDbAdapter<PartidaDoLancamento>(dbType, model, PartidaDoLancamento.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
