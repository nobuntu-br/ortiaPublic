import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PlanoDeContas } from "../models/planoDeContas.model"; 
import { PlanoDeContasService } from "../services/planoDeContas.service";
import { NotFoundError } from "../errors/notFound.error";

export class PlanoDeContasController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  planoDeContasService : PlanoDeContasService = new PlanoDeContasService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planoDeContas"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanoDeContas> = new BaseController(planoDeContasService,  "planoDeContas"); 

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
    const  planoDeContasService : PlanoDeContasService = new PlanoDeContasService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planoDeContas"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanoDeContas> = new BaseController(planoDeContasService,  "planoDeContas"); 

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
    const  planoDeContasService : PlanoDeContasService = new PlanoDeContasService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planoDeContas"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanoDeContas> = new BaseController(planoDeContasService,  "planoDeContas"); 

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
    const  planoDeContasService : PlanoDeContasService = new PlanoDeContasService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planoDeContas"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanoDeContas> = new BaseController(planoDeContasService,  "planoDeContas"); 

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
    const  planoDeContasService : PlanoDeContasService = new PlanoDeContasService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planoDeContas"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanoDeContas> = new BaseController(planoDeContasService,  "planoDeContas"); 

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
    const  planoDeContasService : PlanoDeContasService = new PlanoDeContasService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planoDeContas"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanoDeContas> = new BaseController(planoDeContasService,  "planoDeContas"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
