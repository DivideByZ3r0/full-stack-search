import { z } from 'zod';

const envSchema = z.object({
    VITE_API_URL: z.string().url("VITE_API_URL must be a valid URL"),
    VITE_APP_ENV: z.enum(['development', 'staging', 'production'])
});

const validatedEnv = envSchema.safeParse(import.meta.env);

if (!validatedEnv.success) {
    console.error("Environment variable validation failed:", validatedEnv.error.format());
    throw new Error("Invalid environment variables. Please fix your .env file.");
}

export const ENV = {
    API_URL: validatedEnv.data.VITE_API_URL,
    APP_ENV: validatedEnv.data.VITE_APP_ENV,
};