import axios from "axios";
import config from "../../config";
import { UsersResponseModel } from "./types";

const url = `${config.api}/users`;

const getUsers = async (): Promise<UsersResponseModel> => {
  const response = await axios.get<UsersResponseModel>(url);
  return response.data;
};

export default getUsers;
