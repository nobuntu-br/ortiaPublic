import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Indicador } from "../models/indicador.model"; 
import { IndicadorService } from "../services/indicador.service";
import { NotFoundError } from "../errors/notFound.error";

export class IndicadorController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  indicadorService : IndicadorService = new IndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["indicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Indicador> = new BaseController(indicadorService,  "indicador"); 

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
    const  indicadorService : IndicadorService = new IndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["indicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Indicador> = new BaseController(indicadorService,  "indicador"); 

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
    const  indicadorService : IndicadorService = new IndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["indicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Indicador> = new BaseController(indicadorService,  "indicador"); 

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
    const  indicadorService : IndicadorService = new IndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["indicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Indicador> = new BaseController(indicadorService,  "indicador"); 

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
    const  indicadorService : IndicadorService = new IndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["indicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Indicador> = new BaseController(indicadorService,  "indicador"); 

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
    const  indicadorService : IndicadorService = new IndicadorService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["indicador"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Indicador> = new BaseController(indicadorService,  "indicador"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
