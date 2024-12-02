import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Projeto } from "../models/projeto.model"; 
import BaseRepository from "./base.repository"; 

export default class ProjetoRepository extends BaseRepository<Projeto>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<Projeto> = createDbAdapter<Projeto>(dbType, model, Projeto.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
