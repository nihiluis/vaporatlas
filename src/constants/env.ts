export const DEV = process.env.NODE_ENV !== "production"

export const BASE_PATH = "/app"

export const API_URL =
  !DEV
    ? "https://vaporatlas-api.nihiluis.com"
    : "http://localhost:1312"
