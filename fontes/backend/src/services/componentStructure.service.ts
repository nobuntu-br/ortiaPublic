import { DbType } from "../adapters/createDb.adapter";
import { ComponentStructure } from "../models/componentStructure.model";
import ComponentStructureRepository from "../repository/componentStructureRole.repository";
import BaseService from "./base.service";

export class ComponentStructureService extends BaseService<ComponentStructure> {
  private componentStructureRepository: ComponentStructureRepository;

  constructor(dbType: DbType, model: any, databaseConnection: any) {
    //Cria o repositório com dados para obter o banco de dados
    var repository: ComponentStructureRepository = new ComponentStructureRepository(dbType, model, databaseConnection);
    super(repository, dbType, model, databaseConnection);

    this.componentStructureRepository = repository;
  }

}