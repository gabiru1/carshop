import { Request, Response } from 'express';
import Controller from '.';
import { Car } from '../interfaces/CarInterface';
import { ServiceError } from '../services';
import CarService from '../services/CarService';

export default class CarController extends Controller<Car> {
  private _route: string;

  constructor(service = new CarService(), route = '/cars') {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (req: Request, res: Response): Promise<Response> => {
    const newCar = await this.service.create(req.body);

    if ((newCar as ServiceError).error) {
      return res.status(400).json((newCar as ServiceError).error);
    }

    return res.status(201).json(newCar);
  };
}