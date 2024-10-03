import { ProductInput, ProductUpdateInput } from "../utils/types";
import { pool } from "./db";

const createProduct = async ({
  name,
  description,
  price,
  image,
  stock,
}: ProductInput) => {
  const query = `INSERT INTO products (name, description, price, image,
  stock) VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;

  const result = await pool.query(query, [
    name,
    description,
    price,
    image,
    stock,
  ]);
  return result.rows[0];
};

const getProducts = async () => {
  const { rows } = await pool.query("SELECT * FROM products");

  return rows;
};

const getASingleProduct = async (id: string) => {
  const query = `SELECT * FROM products WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateProduct = async (
  id: string,
  { name, description, price, image, stock }: ProductUpdateInput
) => {
  const query = `UPDATE products SET name = $1, description = $2, price =
 $3, image = $4, stock = $5 WHERE id = $6 RETURNING *
 `;
  const result = await pool.query(query, [
    name,
    description,
    price,
    image,
    stock,
    id,
  ]);
  return result.rows[0];
};

const deleteProduct = async (id: string) => {
  const query = `DELETE FROM products WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const productModel = {
  createProduct,
  getProducts,
  getASingleProduct,
  updateProduct,
  deleteProduct,
};
