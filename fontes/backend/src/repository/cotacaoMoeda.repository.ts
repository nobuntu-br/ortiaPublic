import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { CotacaoMoeda } from "../models/cotacaoMoeda.model"; 
import BaseRepository from "./base.repository"; 

export default class CotacaoMoedaRepository extends BaseRepository<CotacaoMoeda>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<CotacaoMoeda> = createDbAdapter<CotacaoMoeda>(dbType, model, CotacaoMoeda.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
