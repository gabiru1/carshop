import Service, { ServiceError } from './index';
import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | null | ServiceError> => {
    const newCar = CarSchema.safeParse(obj);

    if (!newCar.success) return { error: newCar.error };

    return this.model.create(obj);
  };
}

export default CarService;