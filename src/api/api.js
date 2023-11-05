import axios from "axios";

const BASE_URL = () => "https://mocki.io/";
export const URL_LOGIN = () => {
    return `${BASE_URL}/v1/1150ba9a-833b-44d0-a4d7-7ce13a2b95ba`;
  };
const API = {
    Login : () =>
        axios({
          method: "POST",
          url: URL_LOGIN(),
          headers: {},
        }),
}


export default API;