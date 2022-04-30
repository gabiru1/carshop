import { mokedCar, documentMock } from "./mocks"
import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarModel from "../../../models/CarModel";
import CarService from '../../../services/CarService';

describe('Testa camada Service de Car', () => {
  const carService = new CarService();
  const carModel = new CarModel();

  before(() => {
    sinon.stub(carModel.model, 'create').resolves(documentMock);
  });

  after(() => (carModel.model.create as sinon.SinonStub).restore());

  it('Testa se um carro é criado com sucesso', async () => {
    const response = await carService.create(mokedCar as Car);

    expect(response).to.be.deep.equal(documentMock);
  });
});