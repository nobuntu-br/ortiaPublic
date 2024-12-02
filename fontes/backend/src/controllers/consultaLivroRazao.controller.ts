import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { ConsultaLivroRazao } from "../models/consultaLivroRazao.model"; 
import { ConsultaLivroRazaoService } from "../services/consultaLivroRazao.service";
import { NotFoundError } from "../errors/notFound.error";

export class ConsultaLivroRazaoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  consultaLivroRazaoService : ConsultaLivroRazaoService = new ConsultaLivroRazaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<ConsultaLivroRazao> = new BaseController(consultaLivroRazaoService,  "consultaLivroRazao"); 

    baseController.create(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async findAll(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  consultaLivroRazaoService : ConsultaLivroRazaoService = new ConsultaLivroRazaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<ConsultaLivroRazao> = new BaseController(consultaLivroRazaoService,  "consultaLivroRazao"); 

    baseController.findAll(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async findById(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  consultaLivroRazaoService : ConsultaLivroRazaoService = new ConsultaLivroRazaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<ConsultaLivroRazao> = new BaseController(consultaLivroRazaoService,  "consultaLivroRazao"); 

    baseController.findById(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async update(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  consultaLivroRazaoService : ConsultaLivroRazaoService = new ConsultaLivroRazaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<ConsultaLivroRazao> = new BaseController(consultaLivroRazaoService,  "consultaLivroRazao"); 

    baseController.update(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async getCount(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  consultaLivroRazaoService : ConsultaLivroRazaoService = new ConsultaLivroRazaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<ConsultaLivroRazao> = new BaseController(consultaLivroRazaoService,  "consultaLivroRazao"); 

    baseController.getCount(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async delete(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  consultaLivroRazaoService : ConsultaLivroRazaoService = new ConsultaLivroRazaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["consultaLivroRazao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<ConsultaLivroRazao> = new BaseController(consultaLivroRazaoService,  "consultaLivroRazao"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
