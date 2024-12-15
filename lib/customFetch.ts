import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://fabian-portfolio.net",
  // baseURL: "https://httpbin.org",
});

export default customFetch;
