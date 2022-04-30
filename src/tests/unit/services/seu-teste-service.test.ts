import { mokedCar, documentMock } from "./mocks"
import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarService from '../../../services/CarService';

describe('Testa camada Service de Car', () => {
  const carService = new CarService();

  before(() => {
    sinon.stub(carService.model, 'create').resolves(documentMock);
  });

  after(() => (carService.model.create as sinon.SinonStub).restore());

  it('Testa se um carro é criado com sucesso', async () => {
    const response = await carService.create(mokedCar as Car);

    expect(response).to.be.deep.equal(documentMock);
  });
});