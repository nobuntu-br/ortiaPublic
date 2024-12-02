import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { EstruturaDoOrcamento } from "../models/estruturaDoOrcamento.model"; 
import { EstruturaDoOrcamentoService } from "../services/estruturaDoOrcamento.service";
import { NotFoundError } from "../errors/notFound.error";

export class EstruturaDoOrcamentoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  estruturaDoOrcamentoService : EstruturaDoOrcamentoService = new EstruturaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estruturaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<EstruturaDoOrcamento> = new BaseController(estruturaDoOrcamentoService,  "estruturaDoOrcamento"); 

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
    const  estruturaDoOrcamentoService : EstruturaDoOrcamentoService = new EstruturaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estruturaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<EstruturaDoOrcamento> = new BaseController(estruturaDoOrcamentoService,  "estruturaDoOrcamento"); 

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
    const  estruturaDoOrcamentoService : EstruturaDoOrcamentoService = new EstruturaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estruturaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<EstruturaDoOrcamento> = new BaseController(estruturaDoOrcamentoService,  "estruturaDoOrcamento"); 

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
    const  estruturaDoOrcamentoService : EstruturaDoOrcamentoService = new EstruturaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estruturaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<EstruturaDoOrcamento> = new BaseController(estruturaDoOrcamentoService,  "estruturaDoOrcamento"); 

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
    const  estruturaDoOrcamentoService : EstruturaDoOrcamentoService = new EstruturaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estruturaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<EstruturaDoOrcamento> = new BaseController(estruturaDoOrcamentoService,  "estruturaDoOrcamento"); 

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
    const  estruturaDoOrcamentoService : EstruturaDoOrcamentoService = new EstruturaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estruturaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<EstruturaDoOrcamento> = new BaseController(estruturaDoOrcamentoService,  "estruturaDoOrcamento"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
