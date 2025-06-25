// API Configuration
declare const process: {
  env: {
    REACT_APP_API_URL?: string;
    [key: string]: string | undefined;
  };
};

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://classplan.rayansheikh.space/api';

// Helper function to build API endpoints
export const buildApiUrl = (endpoint: string) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  // Remove trailing slash from base URL if present to avoid double slashes
  const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  return `${baseUrl}/${cleanEndpoint}`;
}; 