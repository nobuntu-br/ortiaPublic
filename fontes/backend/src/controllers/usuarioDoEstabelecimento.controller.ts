import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { UsuarioDoEstabelecimento } from "../models/usuarioDoEstabelecimento.model"; 
import { UsuarioDoEstabelecimentoService } from "../services/usuarioDoEstabelecimento.service";
import { NotFoundError } from "../errors/notFound.error";

export class UsuarioDoEstabelecimentoController { 

  async create(req: Request, res: Response, next: NextFunction){ 
    try { 
      if (req.body.databaseConnection == undefined) { 
        throw new NotFoundError("Não foi definido tenant para uso.");
      } 
      //O Service será criado com base no tipo de banco de dados e o model usado 
    const  usuarioDoEstabelecimentoService : UsuarioDoEstabelecimentoService = new UsuarioDoEstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["usuarioDoEstabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<UsuarioDoEstabelecimento> = new BaseController(usuarioDoEstabelecimentoService,  "usuarioDoEstabelecimento"); 

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
    const  usuarioDoEstabelecimentoService : UsuarioDoEstabelecimentoService = new UsuarioDoEstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["usuarioDoEstabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<UsuarioDoEstabelecimento> = new BaseController(usuarioDoEstabelecimentoService,  "usuarioDoEstabelecimento"); 

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
    const  usuarioDoEstabelecimentoService : UsuarioDoEstabelecimentoService = new UsuarioDoEstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["usuarioDoEstabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<UsuarioDoEstabelecimento> = new BaseController(usuarioDoEstabelecimentoService,  "usuarioDoEstabelecimento"); 

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
    const  usuarioDoEstabelecimentoService : UsuarioDoEstabelecimentoService = new UsuarioDoEstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["usuarioDoEstabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<UsuarioDoEstabelecimento> = new BaseController(usuarioDoEstabelecimentoService,  "usuarioDoEstabelecimento"); 

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
    const  usuarioDoEstabelecimentoService : UsuarioDoEstabelecimentoService = new UsuarioDoEstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["usuarioDoEstabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<UsuarioDoEstabelecimento> = new BaseController(usuarioDoEstabelecimentoService,  "usuarioDoEstabelecimento"); 

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
    const  usuarioDoEstabelecimentoService : UsuarioDoEstabelecimentoService = new UsuarioDoEstabelecimentoService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["usuarioDoEstabelecimento"], req.body.databaseConnection.connection); 
    const baseController : BaseController<UsuarioDoEstabelecimento> = new BaseController(usuarioDoEstabelecimentoService,  "usuarioDoEstabelecimento"); 

    baseController.delete(req, res, next); 
    } catch (error) { 
      next(error);
    } 
  } 

}
