import { Document, Model as M } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  create = async (obj: T): Promise<T> => {
    const created = this.model.create({ ...obj });
    return created;
  };

  read = async (): Promise<T[]> => {
    const readed = this.model.find();
    return readed;
  };

  readOne = async (id: string): Promise<T | null> => {
    const one = this.model.findOne({ _id: id });
    return one;
  };

  update = async (id: string, obj: T): Promise<T | null> => {
    const updated = this.model.findByIdAndUpdate(id, { ...obj });
    return updated;
  };

  delete = async (id: string): Promise<T | null> => {
    const deleted = this.model.findByIdAndDelete(id);
    return deleted;
  };
}

export default MongoModel;