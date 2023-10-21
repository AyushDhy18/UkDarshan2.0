import axios from "axios";
//res = response
export function getListData() {
  return axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    return res.data;
  });
}
