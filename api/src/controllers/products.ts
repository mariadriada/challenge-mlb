import { Request, Response } from "express";

import { ResposeItemsWithAuthor } from "../types";
import { getOne, getItems } from "../services/product";

export const getAllProducts = async (req: Request, res: Response) => {
  const { q } = req.query || "";

  try {
    if (q) {
      const data = await getItems(q.toString());
      const dataToSend: ResposeItemsWithAuthor = {
        ...req.body.inject,
        ...data,
      };
      return res.status(200).json(dataToSend);
    } else {
      return res.status(400).json({ error: "No query to search provided." });
    }
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getOneProduct = async (req: Request, res: Response) => {

  console.log(req.params)

  const {id} = req.params || ""
  if(id) {
    const product = await getOne(id)
    return res.status(200).json(product);
  } 

  
 /* const { q } = req.query || "";

  try {
    if (q) {
      const data = await getItems(q.toString());
      const dataToSend: ResposeItemsWithAuthor = {
        ...req.body.inject,
        ...data,
      };
      return res.status(200).json(dataToSend);
    } else {
      return res.status(400).json({ error: "No query to search provided." });
    }
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }*/
};
