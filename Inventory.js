class Inventory {
    constructor(products = []) {
      this.products = products; // Array of Product objects
    }

    addProduct(product) {
      this.products.push(product);
    }

    removeProduct(product) {
      this.products = this.products.filter(p => p !== product);
    }

    getProduct(product) {
      return this.products.find(p => p === product);
    }

    getProducts() {
      return this.products;
    }
}