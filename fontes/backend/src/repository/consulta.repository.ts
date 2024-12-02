import { DbType } from "../adapters/createDb.adapter"; 

export default class ConsultaRepository { 
  databaseConnection: any;  

  constructor(dbType: DbType, model: any, databaseConnection: any) { 
    this.databaseConnection = databaseConnection; 
  } 

  async consultaLivroRazao(dbType: DbType, databaseConnection: any, _nomeFantasia: string): Promise<any[] | null> {
    if (dbType == 'mongodb') { 
      throw new Error("This method is not implemented yet"); 
    } else { 
      try { 

        const query = `SELECT * FROM public."Empreendimentos" WHERE "nomeFantasia" = :nomeFantasia`;

        const results = await databaseConnection.query(query, { replacements: { nomeFantasia: _nomeFantasia }, type: databaseConnection.QueryTypes.SELECT });
      //   const sql = `SELECT * FROM public."Empreendimentos where nomeFantasia = :nomeFantasia";`; 

      //   const [results, metadata] = await this.databaseConnection.query(sql
      //     , { 
      //     replacements: { // Irá substuir valores dos campos com ":<nomeDoCampo>"pelos valores desejados abaixo 
      //       nomeFantasia: _nomeFantasia
      //     }, 
      //   }
      // ); 

      return results; 
    } catch (error) { 
      console.error(error);
        throw new Error("Erro ao obter os dados da busca ConsultaLivroRazao") 
      }  
    } 
  } 
}
