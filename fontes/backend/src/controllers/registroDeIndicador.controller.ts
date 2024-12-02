import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { RegistroDeIndicador } from "../models/registroDeIndicador.model"; 
import { RegistroDeIndicadorService } from "../services/registroDeIndicador.service";
import { NotFoundError } from "../errors/notFound.error";

export class RegistroDeIndicadorController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  registroDeIndicadorService : RegistroDeIndicadorService = new RegistroDeIndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["registroDeIndicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<RegistroDeIndicador> = new BaseController(registroDeIndicadorService,  "registroDeIndicador"); 

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
    const  registroDeIndicadorService : RegistroDeIndicadorService = new RegistroDeIndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["registroDeIndicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<RegistroDeIndicador> = new BaseController(registroDeIndicadorService,  "registroDeIndicador"); 

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
    const  registroDeIndicadorService : RegistroDeIndicadorService = new RegistroDeIndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["registroDeIndicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<RegistroDeIndicador> = new BaseController(registroDeIndicadorService,  "registroDeIndicador"); 

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
    const  registroDeIndicadorService : RegistroDeIndicadorService = new RegistroDeIndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["registroDeIndicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<RegistroDeIndicador> = new BaseController(registroDeIndicadorService,  "registroDeIndicador"); 

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
    const  registroDeIndicadorService : RegistroDeIndicadorService = new RegistroDeIndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["registroDeIndicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<RegistroDeIndicador> = new BaseController(registroDeIndicadorService,  "registroDeIndicador"); 

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
    const  registroDeIndicadorService : RegistroDeIndicadorService = new RegistroDeIndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["registroDeIndicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<RegistroDeIndicador> = new BaseController(registroDeIndicadorService,  "registroDeIndicador"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
