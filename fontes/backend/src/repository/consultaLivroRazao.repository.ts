import createDbAdapter, { DbType } from "../adapters/createDb.adapter"; 
import { IDatabaseAdapter } from "../adapters/IDatabase.adapter"; 
import { ConsultaLivroRazao } from "../models/consultaLivroRazao.model"; 
import BaseRepository from "./base.repository"; 

export default class ConsultaLivroRazaoRepository extends BaseRepository<ConsultaLivroRazao>{ 

  constructor(dbType: DbType, model: any, databaseConnection: any){ 
    const _adapter : IDatabaseAdapter<ConsultaLivroRazao> = createDbAdapter<ConsultaLivroRazao>(dbType, model, ConsultaLivroRazao.fromJson);
    super(_adapter, databaseConnection); 
  } 

}
