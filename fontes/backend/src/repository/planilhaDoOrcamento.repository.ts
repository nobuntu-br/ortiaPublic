import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { PlanilhaDoOrcamento } from "../models/planilhaDoOrcamento.model"; 
import BaseRepository from "./base.repository"; 

export default class PlanilhaDoOrcamentoRepository extends BaseRepository<PlanilhaDoOrcamento>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<PlanilhaDoOrcamento> = createDbAdapter<PlanilhaDoOrcamento>(dbType, model, PlanilhaDoOrcamento.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
