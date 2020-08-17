export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://vaporatlas-api.herokuapp.com"
    : "http://localhost:1312"
