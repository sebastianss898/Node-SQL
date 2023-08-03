import { Router } from "express";
import {
  agregate,
  deleteProductsById,
  getProducts,
  getProductsById,
  totalProducts,
  updateProductsById,
} from "../controlers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", agregate);

router.get("/products/:id", getProductsById);

router.delete("/products/:id", deleteProductsById);

router.get("/products/count", totalProducts);

router.put("/products/:id", updateProductsById);


export default router;
