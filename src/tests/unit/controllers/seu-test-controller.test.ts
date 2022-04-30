import { mokedCar, documentMock } from './mocks'
import sinon from 'sinon';
import chai from 'chai';
import 'mocha';
import chaiHttp = require('chai-http');
import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/CarModel';
import server from '../../../server';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa camada CarController de car', () => {
  let chaiResponse;
  const carModel = new CarModel();

  describe('Testa rota /cars', () => {
    before(() => {
      sinon.stub(carModel.model, 'create').resolves(documentMock);
    });

    after(() => {
      (carModel.model.create as sinon.SinonStub).restore();
    });

    it('Testa se retorna status 201 e objeto quando inserido dados validos', async () => {
      chaiResponse = await chai
        .request(server.app)
        .post('/cars')
        .send(mokedCar as Car);

        expect(chaiResponse.status).to.equal(201);
        expect(chaiResponse.body).to.deep.equal(documentMock);
    });
  });
});