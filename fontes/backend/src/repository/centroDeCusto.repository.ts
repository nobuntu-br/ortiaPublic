import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { CentroDeCusto } from "../models/centroDeCusto.model"; 
import BaseRepository from "./base.repository"; 

export default class CentroDeCustoRepository extends BaseRepository<CentroDeCusto>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<CentroDeCusto> = createDbAdapter<CentroDeCusto>(dbType, model, CentroDeCusto.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
