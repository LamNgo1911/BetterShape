import { productModel } from "../models/product";
import { ProductInput, ProductUpdateInput } from "../utils/types";

const createProduct = async ({
  name,
  description,
  price,
  image,
  stock,
}: ProductInput) => {
  return await productModel.createProduct({
    name,
    description,
    price,
    image,
    stock,
  });
};

const getProducts = async () => {
  return await productModel.getProducts();
};

const getASingleProduct = async (id: string) => {
  return await productModel.getASingleProduct(id);
};

const updateProduct = async (
  id: string,
  { name, description, price, image, stock }: ProductUpdateInput
) => {
  return await productModel.updateProduct(id, {
    name,
    description,
    price,
    image,
    stock,
  });
};

const deleteProduct = async (id: string) => {
  return await productModel.deleteProduct(id);
};

export const productService = {
  createProduct,
  getProducts,
  getASingleProduct,
  updateProduct,
  deleteProduct,
};
