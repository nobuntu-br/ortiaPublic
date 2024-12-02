import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { HistoricoPadrao } from "../models/historicoPadrao.model"; 
import { HistoricoPadraoService } from "../services/historicoPadrao.service";
import { NotFoundError } from "../errors/notFound.error";

export class HistoricoPadraoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  historicoPadraoService : HistoricoPadraoService = new HistoricoPadraoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["historicoPadrao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<HistoricoPadrao> = new BaseController(historicoPadraoService,  "historicoPadrao"); 

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
    const  historicoPadraoService : HistoricoPadraoService = new HistoricoPadraoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["historicoPadrao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<HistoricoPadrao> = new BaseController(historicoPadraoService,  "historicoPadrao"); 

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
    const  historicoPadraoService : HistoricoPadraoService = new HistoricoPadraoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["historicoPadrao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<HistoricoPadrao> = new BaseController(historicoPadraoService,  "historicoPadrao"); 

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
    const  historicoPadraoService : HistoricoPadraoService = new HistoricoPadraoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["historicoPadrao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<HistoricoPadrao> = new BaseController(historicoPadraoService,  "historicoPadrao"); 

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
    const  historicoPadraoService : HistoricoPadraoService = new HistoricoPadraoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["historicoPadrao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<HistoricoPadrao> = new BaseController(historicoPadraoService,  "historicoPadrao"); 

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
    const  historicoPadraoService : HistoricoPadraoService = new HistoricoPadraoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["historicoPadrao"], req.body.databaseConnection.connection); 
    const baseController : BaseController<HistoricoPadrao> = new BaseController(historicoPadraoService,  "historicoPadrao"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
