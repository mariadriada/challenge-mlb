import { API_URL } from "../../constants";
import { Author } from "../../types";

export const login = async (user: Author) => {
  const url = `${API_URL}/auth`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error: any) {
    return Promise.reject(new Error(error));
  }
};
