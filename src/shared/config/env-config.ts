const getEnvVar = (key: string) => {
    if (import.meta.env.VITE_REACT_APP_API_URL === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return import.meta.env.VITE_REACT_APP_API_URL || "";
};

export const API_URL = getEnvVar("VITE_REACT_APP_API_URL");