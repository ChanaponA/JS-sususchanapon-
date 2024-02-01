function ProductManagement() {
  // Variable to contain product objects
  const products = [];

  return {
      getAllProducts: function () {
          return products;
      },

      addProduct: function (product) {
          products.push(product);
      },

      removeAll: function () {
          products.length = 0;
      },

      searchByName: function (name) {
          return products.filter(product =>
              product.name.toLowerCase().includes(name.toLowerCase())
          );
      },

      searchByPriceRange: function (minPrice, maxPrice) {
          return products.filter(product =>
              product.price >= minPrice && product.price <= maxPrice
          );
      }
  };
}

// Example usage:
const productManager = ProductManagement();

// Adding products
productManager.addProduct({ id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 });
productManager.addProduct({ id: 2, name: 'Smartphone', category: 'Electronics', price: 599.99 });
productManager.addProduct({ id: 3, name: 'Book', category: 'Education', price: 29.99 });

// Retrieving all products
console.log(productManager.getAllProducts());

// Searching by name
console.log(productManager.searchByName('book'));

// Searching by price range
console.log(productManager.searchByPriceRange(100, 700));

// Removing all products
productManager.removeAll();
console.log(productManager.getAllProducts());
