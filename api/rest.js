import axios from "axios";
import { API_URL ,CATEGORY_API_URL } from "@env";



const axiosInstance= axios.create({
  baseURL:  API_URL,
  // headers: {
  //   "TENANT-ID": TENANT_ID
  // }
});
const axiosInstanceCategory= axios.create({
  baseURL:  CATEGORY_API_URL,
  // headers: {
  //   "TENANT-ID": TENANT_ID
  // }
});



axiosInstance.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.get["Content-Type"] ="application/json";


// DEV Only
axios.defaults.headers.common["Cache-Control"] =
  "no-cache, no-store, must-revalidate";
axios.defaults.headers.common.Pragma = "no-cache";
axios.defaults.headers.common.Expires = 0;

export default axiosInstance;
