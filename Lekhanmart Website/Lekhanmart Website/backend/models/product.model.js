import db from "../config/db.js";

export const Product = {

  getAll: (callback) => {
    db.query("SELECT * FROM products", callback);
  },

  getAllByCategory: (category, callback) => {
    db.query("SELECT * FROM products WHERE category = ?", [category], callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], callback);
  },

  create: (data, callback) => {
    const { name, description, price, image, category } = data;

    db.query(
      "INSERT INTO products (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)",
      [name, description, price, image, category],
      callback
    );
  },

  update: (id, data, callback) => {
    const { name, description, price, image, category } = data;

    db.query(
      "UPDATE products SET name=?, description=?, price=?, image=?, category=? WHERE id=?",
      [name, description, price, image, category, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM products WHERE id=?", [id], callback);
  }
};
