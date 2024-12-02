import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Projeto } from "../models/projeto.model"; 
import { ProjetoService } from "../services/projeto.service";
import { NotFoundError } from "../errors/notFound.error";

export class ProjetoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  projetoService : ProjetoService = new ProjetoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["projeto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Projeto> = new BaseController(projetoService,  "projeto"); 

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
    const  projetoService : ProjetoService = new ProjetoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["projeto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Projeto> = new BaseController(projetoService,  "projeto"); 

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
    const  projetoService : ProjetoService = new ProjetoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["projeto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Projeto> = new BaseController(projetoService,  "projeto"); 

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
    const  projetoService : ProjetoService = new ProjetoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["projeto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Projeto> = new BaseController(projetoService,  "projeto"); 

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
    const  projetoService : ProjetoService = new ProjetoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["projeto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Projeto> = new BaseController(projetoService,  "projeto"); 

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
    const  projetoService : ProjetoService = new ProjetoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["projeto"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Projeto> = new BaseController(projetoService,  "projeto"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
