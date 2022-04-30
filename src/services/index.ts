import { ZodError } from 'zod';
import MongoModel from '../models/MongoModel';

export interface ServiceError {
  error: ZodError;
}

abstract class Service<T> {
  constructor(public model: MongoModel<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    const created = this.model.create(obj);
    return created;
  }

  public async read(): Promise<T[]> {
    const readed = this.model.read();
    return readed;
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    const one = this.model.readOne(id);
    return one;
  }
}

export default Service;