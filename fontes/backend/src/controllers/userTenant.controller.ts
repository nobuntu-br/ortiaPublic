import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";
import { RegisterTenantPermissionUseCase } from "../useCases/tenant/registerTenantPermission.useCase";
import UserTenantService from "../services/userTenant.service";
import { UserTenantDTO } from "../models/DTO/userTenant.DTO";
import { IUserTenant } from "../models/userTenant.model";
import { NotFoundError } from "../errors/notFound.error";


export class UserTenantController {

  async create(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }

      const userTenantService: UserTenantService = new UserTenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["userTenant"], req.body.databaseConnection.connection);
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const registerTenantPermissionUseCase : RegisterTenantPermissionUseCase = new RegisterTenantPermissionUseCase(userTenantService, userService);

      const userTenant: UserTenantDTO = {
        TenantId: req.body.tenantId,
        TenantCredentialId: req.body.tenantCredentialId,
        UserUID: req.body.UID
      }

      const registeredUserTenant : IUserTenant  = await registerTenantPermissionUseCase.execute(userTenant);
      res.status(200).send(registeredUserTenant);

    } catch (error) {
      next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const baseController: BaseController<User> = new BaseController(userService, "User");

      baseController.findAll(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const baseController: BaseController<User> = new BaseController(userService, "User");

      baseController.findById(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async getCount(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const baseController: BaseController<User> = new BaseController(userService, "User");

      baseController.getCount(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const baseController: BaseController<User> = new BaseController(userService, "User");

      baseController.update(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const baseController: BaseController<User> = new BaseController(userService, "User");

      baseController.delete(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async deleteAll(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);
      const baseController: BaseController<User> = new BaseController(userService, "User");

      baseController.deleteAll(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async findByUID(req: Request, res: Response) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }
      //O Service será criado com base no tipo de banco de dados e o model usado
      const userService: UserService = new UserService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["user"], req.body.databaseConnection.connection);

      const user = await userService.findOne({ UID: req.params.UID });
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor. " + error });
    }
  }

}