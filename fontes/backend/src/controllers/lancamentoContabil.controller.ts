import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { LancamentoContabil } from "../models/lancamentoContabil.model"; 
import { LancamentoContabilService } from "../services/lancamentoContabil.service";
import { NotFoundError } from "../errors/notFound.error";

export class LancamentoContabilController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  lancamentoContabilService : LancamentoContabilService = new LancamentoContabilService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["lancamentoContabil"], req.body.databaseConnection.connection); 
    const baseController : BaseController<LancamentoContabil> = new BaseController(lancamentoContabilService,  "lancamentoContabil"); 

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
    const  lancamentoContabilService : LancamentoContabilService = new LancamentoContabilService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["lancamentoContabil"], req.body.databaseConnection.connection); 
    const baseController : BaseController<LancamentoContabil> = new BaseController(lancamentoContabilService,  "lancamentoContabil"); 

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
    const  lancamentoContabilService : LancamentoContabilService = new LancamentoContabilService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["lancamentoContabil"], req.body.databaseConnection.connection); 
    const baseController : BaseController<LancamentoContabil> = new BaseController(lancamentoContabilService,  "lancamentoContabil"); 

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
    const  lancamentoContabilService : LancamentoContabilService = new LancamentoContabilService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["lancamentoContabil"], req.body.databaseConnection.connection); 
    const baseController : BaseController<LancamentoContabil> = new BaseController(lancamentoContabilService,  "lancamentoContabil"); 

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
    const  lancamentoContabilService : LancamentoContabilService = new LancamentoContabilService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["lancamentoContabil"], req.body.databaseConnection.connection); 
    const baseController : BaseController<LancamentoContabil> = new BaseController(lancamentoContabilService,  "lancamentoContabil"); 

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
    const  lancamentoContabilService : LancamentoContabilService = new LancamentoContabilService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["lancamentoContabil"], req.body.databaseConnection.connection); 
    const baseController : BaseController<LancamentoContabil> = new BaseController(lancamentoContabilService,  "lancamentoContabil"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
