import { useEffect } from "react";

import { useGlobalStore } from "../redux-toolkit/store";
import { Author } from "../types";

const useAuth = (user: Author) => {
  const { token, isAuthenticated, authenticate } = useGlobalStore();

  useEffect(() => {
    !isAuthenticated && authenticate(user);
  }, []);

  return {
    token,
    isAuthenticated,
  };
};

export default useAuth;
