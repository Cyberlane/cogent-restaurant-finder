import { z } from 'zod/v4';

const envSchema = z.object({
  VITE_FOURSQUARE_API_KEY: z.string(),
  VITE_OFFICE_LAT: z.coerce.number(),
  VITE_OFFICE_LNG: z.coerce.number(),
});

export const ENV = envSchema.parse(import.meta.env);

export const getIssues = (): z.core.$ZodIssue[] | undefined => {
  const result = envSchema.safeParse(import.meta.env);
  if (result.success) {
    return;
  }
  return result.error.issues;
};
