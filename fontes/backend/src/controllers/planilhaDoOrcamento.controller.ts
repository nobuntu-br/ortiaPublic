import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { PlanilhaDoOrcamento } from "../models/planilhaDoOrcamento.model"; 
import { PlanilhaDoOrcamentoService } from "../services/planilhaDoOrcamento.service";
import { NotFoundError } from "../errors/notFound.error";

export class PlanilhaDoOrcamentoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  planilhaDoOrcamentoService : PlanilhaDoOrcamentoService = new PlanilhaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planilhaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanilhaDoOrcamento> = new BaseController(planilhaDoOrcamentoService,  "planilhaDoOrcamento"); 

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
    const  planilhaDoOrcamentoService : PlanilhaDoOrcamentoService = new PlanilhaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planilhaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanilhaDoOrcamento> = new BaseController(planilhaDoOrcamentoService,  "planilhaDoOrcamento"); 

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
    const  planilhaDoOrcamentoService : PlanilhaDoOrcamentoService = new PlanilhaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planilhaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanilhaDoOrcamento> = new BaseController(planilhaDoOrcamentoService,  "planilhaDoOrcamento"); 

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
    const  planilhaDoOrcamentoService : PlanilhaDoOrcamentoService = new PlanilhaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planilhaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanilhaDoOrcamento> = new BaseController(planilhaDoOrcamentoService,  "planilhaDoOrcamento"); 

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
    const  planilhaDoOrcamentoService : PlanilhaDoOrcamentoService = new PlanilhaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planilhaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanilhaDoOrcamento> = new BaseController(planilhaDoOrcamentoService,  "planilhaDoOrcamento"); 

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
    const  planilhaDoOrcamentoService : PlanilhaDoOrcamentoService = new PlanilhaDoOrcamentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["planilhaDoOrcamento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<PlanilhaDoOrcamento> = new BaseController(planilhaDoOrcamentoService,  "planilhaDoOrcamento"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
