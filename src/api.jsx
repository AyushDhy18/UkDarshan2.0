import axios from "axios";
//res = response

//Get List Data
export function getListData() {
  return axios.get("https://myeasykart.codeyogi.io/products").then((res) => {
    return res.data;
  });
}

export function getPlaceData(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then((res) => {
      return res.data;
    });
}
