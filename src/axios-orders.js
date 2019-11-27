import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-cfd93.firebaseio.com/"
});

export default instance;
