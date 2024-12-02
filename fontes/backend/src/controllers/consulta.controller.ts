import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/notFound.error";
import { ConsultaService } from '../services/consulta.service'; 

export class ConsultaController { 
  async consultaLivroRazao(req: Request, res: Response, next: NextFunction) { 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso."); 
      } 

      const consultaService: ConsultaService = new ConsultaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection);


      const nomeFantasia: string = typeof req.query.nomeFantasia === 'string' ? req.query.nomeFantasia : '';

      const consultaLivroRazao = await consultaService.consultaLivroRazao(req.body.databaseConnection.connection, nomeFantasia);

      return res.status(200).send(consultaLivroRazao); 
    } catch (error) { 
      next(error); 
    } 
  } 
}
