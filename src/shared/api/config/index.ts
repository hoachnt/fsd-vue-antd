
const getEnvVariable = (key: string) => {
    if (import.meta.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }

    return import.meta.env[key]
} 

export const API_URL = getEnvVariable("VITE_APP_API_URL")
export * from "./imports"