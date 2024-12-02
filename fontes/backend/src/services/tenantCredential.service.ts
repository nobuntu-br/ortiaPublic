import { DbType } from "../adapters/createDb.adapter";
import { TenantCredential } from "../models/tenantCredential.model";
import TenantCredentialRepository from "../repository/tenantCredential.repository";
import BaseService from "./base.service";

export class TenantCredentialService extends BaseService<TenantCredential> {
  private tenantCredentialRepository: TenantCredentialRepository;

  constructor(dbType: DbType, model: any, databaseConnection: any) {
    //Cria o repositório com dados para obter o banco de dados
    var repository : TenantCredentialRepository = new TenantCredentialRepository(dbType, model, databaseConnection);
    super(repository, dbType, model, databaseConnection);

    this.tenantCredentialRepository = repository;
  }

}