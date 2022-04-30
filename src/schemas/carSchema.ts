import { Schema, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';

interface CarDocument extends Car, Document {}

const CarSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default CarSchema;