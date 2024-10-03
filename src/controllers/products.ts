import { Request, Response } from "express";
import { productService } from "../services/products";

const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, image, stock } = req.body;

  try {
    const newProduct = await productService.createProduct({
      name,
      description,
      price,
      image,
      stock,
    });

    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const getASingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await productService.getASingleProduct(id);

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { name, description, price, image, stock } = req.body;
  const { id } = req.params;
  try {
    const product = await productService.updateProduct(id, {
      name,
      description,
      price,
      image,
      stock,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await productService.deleteProduct(id);

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const productController = {
  createProduct,
  getProducts,
  getASingleProduct,
  updateProduct,
  deleteProduct,
};
