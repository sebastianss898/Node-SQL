export const queries = {
  getAllProducts: "SELECT * FROM products",
  addProducts:
    "INSERT INTO products (name, description, quantiti) VALUES (@name, @description, @quantiti)",
  getProductsByid: "SELECT * FROM products where id = @id",
  deleteProductsById: "DELETE FROM [crud].[dbo].[products] where id = @id",
  totalProducts: "SELECT COUNT(*) FROM products",
  updateProductsById:
    "UPDATE products SET Nmae=@name,Description=@description, quantiti=@quantiti WHERE id = @id"
};
