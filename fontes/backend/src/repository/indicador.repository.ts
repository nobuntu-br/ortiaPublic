import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Indicador } from "../models/indicador.model"; 
import BaseRepository from "./base.repository"; 

export default class IndicadorRepository extends BaseRepository<Indicador>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<Indicador> = createDbAdapter<Indicador>(dbType, model, Indicador.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
