import { Author } from "../src/types";

export const user: Author = {
  name: process.env.USER_NAME || "",
  lastname: process.env.USER_LASTNAME || "",
};
