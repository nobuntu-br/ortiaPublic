import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { RegistroDeIndicador } from "../models/registroDeIndicador.model"; 
import BaseRepository from "./base.repository"; 

export default class RegistroDeIndicadorRepository extends BaseRepository<RegistroDeIndicador>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<RegistroDeIndicador> = createDbAdapter<RegistroDeIndicador>(dbType, model, RegistroDeIndicador.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
