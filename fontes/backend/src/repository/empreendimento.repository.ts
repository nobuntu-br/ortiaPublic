import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { Empreendimento } from "../models/empreendimento.model"; 
import BaseRepository from "./base.repository"; 

export default class EmpreendimentoRepository extends BaseRepository<Empreendimento>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<Empreendimento> = createDbAdapter<Empreendimento>(dbType, model, Empreendimento.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
