import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { AreaDeNegocio } from "../models/areaDeNegocio.model"; 
import { AreaDeNegocioService } from "../services/areaDeNegocio.service";
import { NotFoundError } from "../errors/notFound.error";

export class AreaDeNegocioController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  areaDeNegocioService : AreaDeNegocioService = new AreaDeNegocioService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["areaDeNegocio"], req.body.databaseConnection.connection); 
    const baseController : BaseController<AreaDeNegocio> = new BaseController(areaDeNegocioService,  "areaDeNegocio"); 

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
    const  areaDeNegocioService : AreaDeNegocioService = new AreaDeNegocioService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["areaDeNegocio"], req.body.databaseConnection.connection); 
    const baseController : BaseController<AreaDeNegocio> = new BaseController(areaDeNegocioService,  "areaDeNegocio"); 

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
    const  areaDeNegocioService : AreaDeNegocioService = new AreaDeNegocioService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["areaDeNegocio"], req.body.databaseConnection.connection); 
    const baseController : BaseController<AreaDeNegocio> = new BaseController(areaDeNegocioService,  "areaDeNegocio"); 

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
    const  areaDeNegocioService : AreaDeNegocioService = new AreaDeNegocioService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["areaDeNegocio"], req.body.databaseConnection.connection); 
    const baseController : BaseController<AreaDeNegocio> = new BaseController(areaDeNegocioService,  "areaDeNegocio"); 

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
    const  areaDeNegocioService : AreaDeNegocioService = new AreaDeNegocioService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["areaDeNegocio"], req.body.databaseConnection.connection); 
    const baseController : BaseController<AreaDeNegocio> = new BaseController(areaDeNegocioService,  "areaDeNegocio"); 

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
    const  areaDeNegocioService : AreaDeNegocioService = new AreaDeNegocioService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["areaDeNegocio"], req.body.databaseConnection.connection); 
    const baseController : BaseController<AreaDeNegocio> = new BaseController(areaDeNegocioService,  "areaDeNegocio"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
