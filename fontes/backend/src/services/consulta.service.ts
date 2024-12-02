import { DbType } from "../adapters/createDb.adapter";
import ConsultaRepository from "../repository/consulta.repository";

export class ConsultaService{ 
  consultaRepository: ConsultaRepository; 
  dbType: DbType; 

  constructor(dbType: DbType, model: any, databaseConnection: any) {  
    var repository : ConsultaRepository = new ConsultaRepository(dbType, model, databaseConnection);  
    this.dbType = dbType; 
    this.consultaRepository = repository; 
  } 

  async consultaLivroRazao(databaseConnection: any, _nomeFantasia: string): Promise<any> { 
    try { 
      return await this.consultaRepository.consultaLivroRazao(this.dbType, databaseConnection, _nomeFantasia)
    } catch (error) { 
      throw error; 
    } 
  } 
}
