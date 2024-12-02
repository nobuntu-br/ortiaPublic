import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { CotacaoMoeda } from "../models/cotacaoMoeda.model"; 
import { CotacaoMoedaService } from "../services/cotacaoMoeda.service";
import { NotFoundError } from "../errors/notFound.error";

export class CotacaoMoedaController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  cotacaoMoedaService : CotacaoMoedaService = new CotacaoMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["cotacaoMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CotacaoMoeda> = new BaseController(cotacaoMoedaService,  "cotacaoMoeda"); 

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
    const  cotacaoMoedaService : CotacaoMoedaService = new CotacaoMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["cotacaoMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CotacaoMoeda> = new BaseController(cotacaoMoedaService,  "cotacaoMoeda"); 

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
    const  cotacaoMoedaService : CotacaoMoedaService = new CotacaoMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["cotacaoMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CotacaoMoeda> = new BaseController(cotacaoMoedaService,  "cotacaoMoeda"); 

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
    const  cotacaoMoedaService : CotacaoMoedaService = new CotacaoMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["cotacaoMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CotacaoMoeda> = new BaseController(cotacaoMoedaService,  "cotacaoMoeda"); 

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
    const  cotacaoMoedaService : CotacaoMoedaService = new CotacaoMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["cotacaoMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CotacaoMoeda> = new BaseController(cotacaoMoedaService,  "cotacaoMoeda"); 

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
    const  cotacaoMoedaService : CotacaoMoedaService = new CotacaoMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["cotacaoMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CotacaoMoeda> = new BaseController(cotacaoMoedaService,  "cotacaoMoeda"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
