import { NextFunction, Request, Response } from "express";
import { BaseController } from "./base.controller";
import TenantService from "../services/tenant.service";
import { Tenant } from "../models/tenant.model";
import UserTenantService from "../services/userTenant.service";
import { GetUserTenantsUseCase } from "../useCases/tenant/getUserTenants.useCase";
import { NotFoundError } from "../errors/notFound.error";

export class TenantController {

  async create(req: Request, res: Response, next: NextFunction) {

    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }

      //O Service será criado com base no tipo de banco de dados e o model usado
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

      baseController.create(req, res, next);
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
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

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
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

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
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

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
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

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
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

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
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);
      //Base Controller é uma classe que já tem implementado todas as funções de CRUD
      const baseController: BaseController<Tenant> = new BaseController(tenantService, "Tenant");

      baseController.deleteAll(req, res, next);
    } catch (error) {
      next(error);
    }

  }

  async findByUserUID(req: Request, res: Response) {
    try {

      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }

      const userTenantService: UserTenantService = new UserTenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["userTenant"], req.body.databaseConnection.connection);

      // const tenants = await userTenantService.findMany({UserUID: req.params.UID});
      const getUserTenantsUseCase : GetUserTenantsUseCase = new GetUserTenantsUseCase(userTenantService);
      const usertenants = await getUserTenantsUseCase.execute(req.params.UID);

      if (usertenants == null) {
        return res.status(404).json({ message: 'Usuário não possui tenant que pode acessar' });
      }
      return res.status(200).send(usertenants);
    } catch (error) {
      return res.status(500).send({ message: "Ocorreu um erro desconhecido no servidor. " + error });
    }
  }

  /**
   * Obter todos os tenants que o usuário que faz a requisição é administrador
   * @returns Retorna um array com todos os tenants que o usuário que faz a requisição é administrador
   */
  async findTenantsUserIsAdmin(req: Request, res: Response, next: NextFunction){
    try {
      if (req.body.databaseConnection == undefined) {
        throw new NotFoundError("Não foi definido tenant para uso.")
      }

      //O Service será criado com base no tipo de banco de dados e o model usado
      const tenantService: TenantService = new TenantService(req.body.databaseConnection.databaseType, req.body.databaseConnection.models["tenant"], req.body.databaseConnection.connection);

      const tenantsUserIsAdmin : Tenant[] = await tenantService.findTenantsUserIsAdmin(req.body.userUID);

      if (tenantsUserIsAdmin == null) {
        throw new NotFoundError("Não foram encontrados tenants que esse usuário é administrador");
      }
      return res.status(200).send(tenantsUserIsAdmin);
    } catch (error) {
      next(error);
    }
  }
}