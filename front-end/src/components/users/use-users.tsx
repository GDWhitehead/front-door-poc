import useSWR from "swr";
import { UseUsersModel } from "./types";
import getUsers from "./users-service";

const useUsers = (): UseUsersModel => {
  const { data, error } = useSWR(`/users`, getUsers);
  return {
    users: data?.data,
    serverName: data?.serverName,
    isLoading: !error && !data,
    error,
  };
};

export default useUsers;
