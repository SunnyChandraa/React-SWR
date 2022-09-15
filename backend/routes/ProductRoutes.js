import express from "express";
import {
    getProducts,
    getProductsByID,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js"

const router = express.Router();

router.get('/products', getProducts);
router.get('/product/:id', getProductsByID);
router.post('/product', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;