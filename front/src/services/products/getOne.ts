import { API_URL } from "../../constants";

const getOne = async (id: string, token: string) => {
  const url = `${API_URL}/items/${id}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error: any) {
    return Promise.reject(new Error(error));
  }
};

export default getOne;
