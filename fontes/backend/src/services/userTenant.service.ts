import { DbType } from "../adapters/createDb.adapter";
import { myCache } from "../adapters/database.config";
import { IUserTenant, UserTenant } from "../models/userTenant.model";
import UserTenantRepository from "../repository/userTenant.repository";
import BaseService from "./base.service";

export default class UserTenantService extends BaseService<IUserTenant> {
  private userTenantRepository: UserTenantRepository;

  constructor(dbType: DbType, model: any, databaseConnection: any) {
    //Cria o repositório com dados para obter o banco de dados
    var repository = new UserTenantRepository(dbType, model, databaseConnection);
    super(repository, dbType, model, databaseConnection);

    this.userTenantRepository = repository;
  }

  async userHasAccessToTenant(userUID: string, tenantId: string): Promise<boolean> {
    try {

      if (this.getUserAcessToTenantOnCache(userUID, tenantId) != null) {
        return true;
      }

      const userTenant = await this.getUserTenantsWithDefaultTenant(userUID);

      if (userTenant == null) {
        return false;
      }

      this.saveUserAcessToTenantOnCache(userUID, tenantId, userTenant);
      return true;

    } catch (error) {
      throw new Error("Erro ao buscar o usuário e os tenants " + error);
    }

  }

  saveUserAcessToTenantOnCache(userUID: string, tenantId: string, userTenant: Object) {
    try {
      myCache.set(userUID + tenantId, userTenant);
    } catch (error) {
      console.warn(error);
      throw new Error("Erro ao salvar userTenant no cache")
    }
  }

  getUserAcessToTenantOnCache(userUID: string, tenantId: string): string | null {
    //TODO se não encontrar nada do cache, retornar null
    return myCache.get(userUID + tenantId);
  }

  //TODO  um usuário X que deve ser administrador do tenant pode alterar quais usuários tem permissão no tenant. Ao ter feito alguma alteração, tem que ser alterado no cache.
  //TODO fazer a função que verifica se o usuário é admin do tenant para poder alterar a permissão dos outros ao tenant
  //TODO permitir o usuário passar o cargo de admin pra outra pessoa

  async getUserTenantsWithDefaultTenant(UserUID: string){
    try {
      return this.userTenantRepository.getUserTenantsWithDefaultTenant(this.dbType, this.model, UserUID);
    } catch (error) {
      throw new Error("Erro ao obter userTenants com o tenant padrão");
    }
  }

}