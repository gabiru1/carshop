import { z } from 'zod';

export const VehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

/* export interface Vehicle {
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
} */

export type Vehicle = z.infer<typeof VehicleSchema>;