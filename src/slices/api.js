// export const url = "http://localhost:9000/.netlify/functions/api";
export const url = "https://avaproducts.netlify.app/.netlify/functions/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
