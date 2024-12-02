import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { PlanoDeContas } from "../models/planoDeContas.model"; 
import BaseRepository from "./base.repository"; 

export default class PlanoDeContasRepository extends BaseRepository<PlanoDeContas>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<PlanoDeContas> = createDbAdapter<PlanoDeContas>(dbType, model, PlanoDeContas.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
