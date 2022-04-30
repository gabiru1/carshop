import { documentMock, mokedCar } from './mocks';
import 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/CarModel';

describe('Teste a camada model de car', () => {

  const carModel = new CarModel();

  before(() => {
    sinon.stub(carModel.model, 'create').resolves(documentMock);
  });

  after(() => {
    (carModel.model.create as sinon.SinonStub).restore();
  });

  it('testa se um carro foi criado com sucesso', async () => {
    const response = await carModel.create(mokedCar as Car);

    expect(response).to.deep.equal(documentMock);
  });
});