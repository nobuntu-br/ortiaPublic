import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { Estabelecimento } from "../models/estabelecimento.model"; 
import { EstabelecimentoService } from "../services/estabelecimento.service";
import { NotFoundError } from "../errors/notFound.error";

export class EstabelecimentoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  estabelecimentoService : EstabelecimentoService = new EstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Estabelecimento> = new BaseController(estabelecimentoService,  "estabelecimento"); 

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
    const  estabelecimentoService : EstabelecimentoService = new EstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Estabelecimento> = new BaseController(estabelecimentoService,  "estabelecimento"); 

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
    const  estabelecimentoService : EstabelecimentoService = new EstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Estabelecimento> = new BaseController(estabelecimentoService,  "estabelecimento"); 

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
    const  estabelecimentoService : EstabelecimentoService = new EstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Estabelecimento> = new BaseController(estabelecimentoService,  "estabelecimento"); 

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
    const  estabelecimentoService : EstabelecimentoService = new EstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Estabelecimento> = new BaseController(estabelecimentoService,  "estabelecimento"); 

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
    const  estabelecimentoService : EstabelecimentoService = new EstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["estabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<Estabelecimento> = new BaseController(estabelecimentoService,  "estabelecimento"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
