import { Product } from "../models/product.model.js";

export const getProducts = (req, res) => {
  const { category } = req.query;
  const handler = (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  };

  if (category) {
    Product.getAllByCategory(category, handler);
    return;
  }

  Product.getAll(handler);
};

export const getProduct = (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

export const createProduct = (req, res) => {
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product created successfully" });
  });
};

export const updateProduct = (req, res) => {
  Product.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product updated successfully" });
  });
};

export const deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product deleted successfully" });
  });
};
