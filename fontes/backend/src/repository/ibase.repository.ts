import { Model } from "mongoose";
import { FilterValue } from "../utils/mongoose/customQuery.util";
import { ModelStatic } from "sequelize";

export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findAll(limitPerPage: number, offset: number): Promise<T[] | null>;
  findOne(query: T): Promise<T | null>;
  findMany(query: T): Promise<T[] | null>;
  findById(id: string): Promise<T | null>;
  getCount(): Promise<number | null>;
  update(id: string, data: Object): Promise<T | null>;
  delete(id: string): Promise<T | null>;
  deleteAll(): Promise<void>;
  findCustom(filterValues: FilterValue[], filterConditions: string[], model: Model<any> | ModelStatic<any>): Promise<T[] | null>;
}
