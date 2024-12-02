import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { CentroDeCusto } from "../models/centroDeCusto.model"; 
import { CentroDeCustoService } from "../services/centroDeCusto.service";
import { NotFoundError } from "../errors/notFound.error";

export class CentroDeCustoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  centroDeCustoService : CentroDeCustoService = new CentroDeCustoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["centroDeCusto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CentroDeCusto> = new BaseController(centroDeCustoService,  "centroDeCusto"); 

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
    const  centroDeCustoService : CentroDeCustoService = new CentroDeCustoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["centroDeCusto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CentroDeCusto> = new BaseController(centroDeCustoService,  "centroDeCusto"); 

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
    const  centroDeCustoService : CentroDeCustoService = new CentroDeCustoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["centroDeCusto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CentroDeCusto> = new BaseController(centroDeCustoService,  "centroDeCusto"); 

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
    const  centroDeCustoService : CentroDeCustoService = new CentroDeCustoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["centroDeCusto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CentroDeCusto> = new BaseController(centroDeCustoService,  "centroDeCusto"); 

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
    const  centroDeCustoService : CentroDeCustoService = new CentroDeCustoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["centroDeCusto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CentroDeCusto> = new BaseController(centroDeCustoService,  "centroDeCusto"); 

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
    const  centroDeCustoService : CentroDeCustoService = new CentroDeCustoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["centroDeCusto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<CentroDeCusto> = new BaseController(centroDeCustoService,  "centroDeCusto"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
