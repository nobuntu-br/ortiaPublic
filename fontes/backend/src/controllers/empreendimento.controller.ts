import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Empreendimento } from "../models/empreendimento.model"; 
import { EmpreendimentoService } from "../services/empreendimento.service";
import { NotFoundError } from "../errors/notFound.error";

export class EmpreendimentoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento"); 

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
    const  empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento"); 

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
    const  empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento"); 

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
    const  empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento"); 

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
    const  empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento"); 

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
    const  empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

  async customQuery(req: Request, res: Response, next: NextFunction){
    try {
      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.");
      }

      const empreendimentoService : EmpreendimentoService = new EmpreendimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["empreendimento"], req.body.databaseConnection.connection);
      const baseController : BaseController<Empreendimento> = new BaseController(empreendimentoService,  "empreendimento");

      baseController.findCustom(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
