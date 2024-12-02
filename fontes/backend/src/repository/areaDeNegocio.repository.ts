import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { AreaDeNegocio } from "../models/areaDeNegocio.model"; 
import BaseRepository from "./base.repository"; 

export default class AreaDeNegocioRepository extends BaseRepository<AreaDeNegocio>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<AreaDeNegocio> = createDbAdapter<AreaDeNegocio>(dbType, model, AreaDeNegocio.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
