import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { EstruturaDoOrcamento } from "../models/estruturaDoOrcamento.model"; 
import BaseRepository from "./base.repository"; 

export default class EstruturaDoOrcamentoRepository extends BaseRepository<EstruturaDoOrcamento>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<EstruturaDoOrcamento> = createDbAdapter<EstruturaDoOrcamento>(dbType, model, EstruturaDoOrcamento.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
