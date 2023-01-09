import { Application } from "express";

import { getAllProducts } from "./products"
import { authenticate, validateToken } from "./auth";


export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/items", validateToken, getAllProducts);

  app.post("/api/auth", authenticate);

};
