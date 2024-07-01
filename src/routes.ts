import express from "express";

import uploadMiddleware from "./middlewares/upload.middleware";
import uploadController from "./controllers/upload.controller";
import productsController from "./controllers/products.controller";
import CategoryController from "@/controllers/category.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);


router.post("/categories", CategoryController.create);
router.get("/categories", CategoryController.findAll);
router.get("/categories/:id", CategoryController.findOne);
router.put("/categories/:id", CategoryController.update);
router.delete("/categories/:id", CategoryController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
