import { ENV } from "./config";

let apiUrl: string = "";
let webUrl: string = "";

if (ENV === "PROD") {
  apiUrl = "https://api.pro-match.com";
  webUrl = "https://pro-match.com";
} else if (ENV === "DEV") {
  apiUrl = "http://localhost:3000/api";
  webUrl = "http://localhost:4321";
} else if (ENV === "LOCAL") {
  apiUrl = "http://localhost:3000/api";
  webUrl = "http://localhost:4321";
}

export const API_URL = apiUrl;
export const WEB_URL = webUrl;
