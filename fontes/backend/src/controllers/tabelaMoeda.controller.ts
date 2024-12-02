import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { TabelaMoeda } from "../models/tabelaMoeda.model"; 
import { TabelaMoedaService } from "../services/tabelaMoeda.service";
import { NotFoundError } from "../errors/notFound.error";

export class TabelaMoedaController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  tabelaMoedaService : TabelaMoedaService = new TabelaMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tabelaMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<TabelaMoeda> = new BaseController(tabelaMoedaService,  "tabelaMoeda"); 

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
    const  tabelaMoedaService : TabelaMoedaService = new TabelaMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tabelaMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<TabelaMoeda> = new BaseController(tabelaMoedaService,  "tabelaMoeda"); 

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
    const  tabelaMoedaService : TabelaMoedaService = new TabelaMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tabelaMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<TabelaMoeda> = new BaseController(tabelaMoedaService,  "tabelaMoeda"); 

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
    const  tabelaMoedaService : TabelaMoedaService = new TabelaMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tabelaMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<TabelaMoeda> = new BaseController(tabelaMoedaService,  "tabelaMoeda"); 

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
    const  tabelaMoedaService : TabelaMoedaService = new TabelaMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tabelaMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<TabelaMoeda> = new BaseController(tabelaMoedaService,  "tabelaMoeda"); 

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
    const  tabelaMoedaService : TabelaMoedaService = new TabelaMoedaService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tabelaMoeda"], req.body.databaseConnection.connection); 
    const baseController : BaseController<TabelaMoeda> = new BaseController(tabelaMoedaService,  "tabelaMoeda"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
