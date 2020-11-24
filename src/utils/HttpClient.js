import { getItem, setItem } from "./Storage";
const axios = require("axios").default;

axios.interceptors.request.use(
  function (config) {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    if (localStorage.getItem("TOKEN")) {

      // console.log("ada tokennnn")
      // config.headers.Authorization = "Bearer " +localStorage.getItem("TOKEN");
           config.headers.Authorization = "Bearer " +"cnI2ckJGTzk0RXZtVnY4MURXQzc6WA";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let customError = {
      code: error.response ? error.response.status : 500,
      message: error.response ? error.response.statusText : "Internal Error",
      data: error.response ? error.response.data : {},
    };
    const originalRequest = error.config;
    try {
      if (error.response.status === 401) {
        var er = error.response.data.error;
        if (er.message.indexOf("expired") > -1) {
          var data = {
            refreshToken: getItem("refreshToken"),
          };
          return RequestPost("users/refreshToken", data)
            .then(res => {

            
              setItem("TOKEN", res.data.token);
              setItem("refreshToken", res.data.refreshToken);
              return axios(originalRequest);
            })
            .catch(e => {
              console.log(e);
            });
        }
        // if (er.message.indexOf("header not found") > -1) {
        //   window.location.href = "/login";
        // }
      } else if (error.response.status === 403) {
        window.location.href = "/forbidden";
      }
    } catch (error) {
      console.log(error, "HttpClient error");
    }
    console.log(customError);

    return Promise.reject(customError);
  }
);

const decode = obj => {
  try {
    return new URLSearchParams(obj).toString();
  } catch (error) {
    return false;
  }
};

/**
 * Axios with Method GET
 * @param uri is endpoint from URL
 * @param query is parameter query for get data
 */
export async function RequestGet(uri, query) {
  if (query) {
    query = "?" + decode(query);
  }
  return await axios.get(process.env.REACT_APP_API + uri + (query || ""));
}

/**
 * Axios with method POST
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPost(uri, data) {
  //  let url = process.env.REACT_APP_API
  return await axios.post(process.env.REACT_APP_API + uri, data);
}

/**
 * Axios with method PUT
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPut(uri, data) {
  return await axios.put(process.env.REACT_APP_API + uri, data);
}

/**
 * Axios with method DELETE
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestDelete(uri) {
  return await axios.delete(process.env.REACT_APP_API + uri);
}
