import fetch from "node-fetch";

import config from "../../config";
const { API_URL, ITEMS_ENDPOINT } = config;

export const getDescription = async (id: string) => {
  const url = `${API_URL}${ITEMS_ENDPOINT}${id}/description`;
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    const { plain_text: plainText } = data;
    return plainText;
  } catch (error) {}
};
