import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PartidaDoLancamento } from "../models/partidaDoLancamento.model"; 
import { PartidaDoLancamentoService } from "../services/partidaDoLancamento.service";
import { NotFoundError } from "../errors/notFound.error";

export class PartidaDoLancamentoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  partidaDoLancamentoService : PartidaDoLancamentoService = new PartidaDoLancamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["partidaDoLancamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PartidaDoLancamento> = new BaseController(partidaDoLancamentoService,  "partidaDoLancamento"); 

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
    const  partidaDoLancamentoService : PartidaDoLancamentoService = new PartidaDoLancamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["partidaDoLancamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PartidaDoLancamento> = new BaseController(partidaDoLancamentoService,  "partidaDoLancamento"); 

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
    const  partidaDoLancamentoService : PartidaDoLancamentoService = new PartidaDoLancamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["partidaDoLancamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PartidaDoLancamento> = new BaseController(partidaDoLancamentoService,  "partidaDoLancamento"); 

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
    const  partidaDoLancamentoService : PartidaDoLancamentoService = new PartidaDoLancamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["partidaDoLancamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PartidaDoLancamento> = new BaseController(partidaDoLancamentoService,  "partidaDoLancamento"); 

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
    const  partidaDoLancamentoService : PartidaDoLancamentoService = new PartidaDoLancamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["partidaDoLancamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PartidaDoLancamento> = new BaseController(partidaDoLancamentoService,  "partidaDoLancamento"); 

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
    const  partidaDoLancamentoService : PartidaDoLancamentoService = new PartidaDoLancamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["partidaDoLancamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PartidaDoLancamento> = new BaseController(partidaDoLancamentoService,  "partidaDoLancamento"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
