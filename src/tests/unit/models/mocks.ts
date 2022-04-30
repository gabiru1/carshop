const mokedCar = {
  doorsQty: 4,
  seatsQty: 5,
  model: 'Tesla Model A',
  year: 2021,
  color: 'grey',
  status: true,
  buyValue: 1699000,
};

const documentMock = {
  _id: '4edd40c86762e0fb12000003',
  ...mokedCar,
};

export {
  mokedCar,
  documentMock
};