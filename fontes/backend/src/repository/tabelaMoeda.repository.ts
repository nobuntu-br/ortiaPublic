import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { TabelaMoeda } from "../models/tabelaMoeda.model"; 
import BaseRepository from "./base.repository"; 

export default class TabelaMoedaRepository extends BaseRepository<TabelaMoeda>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<TabelaMoeda> = createDbAdapter<TabelaMoeda>(dbType, model, TabelaMoeda.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
