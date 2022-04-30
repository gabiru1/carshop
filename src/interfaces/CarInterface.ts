// import { Vehicle } from './VehicleInterface';
import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export const CarSchema = VehicleSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

/* export interface Car extends Vehicle {
  doorsQty: number;
  seatsQty: number;
} */
export type Car = z.infer<typeof CarSchema>; 