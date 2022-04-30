import { model as createModel } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';
import CarSchema from '../schemas/carSchema';

class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Cars', CarSchema)) {
    super(model);
  }
}

export default CarModel;