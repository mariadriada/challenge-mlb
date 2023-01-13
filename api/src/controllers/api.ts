import { Application } from "express";

import { getAllProducts, getOneProduct } from "./products";
import { authenticate, validateToken } from "./auth";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/items", validateToken, getAllProducts);
  app.get("/api/items/:id", validateToken, getOneProduct);
  app.post("/api/auth", authenticate);
};
