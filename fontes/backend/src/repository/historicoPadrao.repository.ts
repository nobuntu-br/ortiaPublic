import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { HistoricoPadrao } from "../models/historicoPadrao.model"; 
import BaseRepository from "./base.repository"; 

export default class HistoricoPadraoRepository extends BaseRepository<HistoricoPadrao>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<HistoricoPadrao> = createDbAdapter<HistoricoPadrao>(dbType, model, HistoricoPadrao.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
