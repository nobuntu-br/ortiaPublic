import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { FuncaoDePrevisao } from "../models/funcaoDePrevisao.model"; 
import { FuncaoDePrevisaoService } from "../services/funcaoDePrevisao.service";
import { NotFoundError } from "../errors/notFound.error";

export class FuncaoDePrevisaoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  funcaoDePrevisaoService : FuncaoDePrevisaoService = new FuncaoDePrevisaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["funcaoDePrevisao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<FuncaoDePrevisao> = new BaseController(funcaoDePrevisaoService,  "funcaoDePrevisao"); 

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
    const  funcaoDePrevisaoService : FuncaoDePrevisaoService = new FuncaoDePrevisaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["funcaoDePrevisao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<FuncaoDePrevisao> = new BaseController(funcaoDePrevisaoService,  "funcaoDePrevisao"); 

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
    const  funcaoDePrevisaoService : FuncaoDePrevisaoService = new FuncaoDePrevisaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["funcaoDePrevisao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<FuncaoDePrevisao> = new BaseController(funcaoDePrevisaoService,  "funcaoDePrevisao"); 

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
    const  funcaoDePrevisaoService : FuncaoDePrevisaoService = new FuncaoDePrevisaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["funcaoDePrevisao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<FuncaoDePrevisao> = new BaseController(funcaoDePrevisaoService,  "funcaoDePrevisao"); 

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
    const  funcaoDePrevisaoService : FuncaoDePrevisaoService = new FuncaoDePrevisaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["funcaoDePrevisao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<FuncaoDePrevisao> = new BaseController(funcaoDePrevisaoService,  "funcaoDePrevisao"); 

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
    const  funcaoDePrevisaoService : FuncaoDePrevisaoService = new FuncaoDePrevisaoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["funcaoDePrevisao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<FuncaoDePrevisao> = new BaseController(funcaoDePrevisaoService,  "funcaoDePrevisao"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
