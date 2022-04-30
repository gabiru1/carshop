import { Request, Response } from 'express';
import Service from '../services';

export interface RequestWithBody<T> extends Request {
  body: T;
}

export type ResponseError = {
  error: unknown;
};

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(public service: Service<T>) {}

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;
}

export default Controller;