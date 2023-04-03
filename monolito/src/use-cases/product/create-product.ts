import { ProductRepository } from '../../repositories/product-repository';

export class ProductService {
  
  constructor(private productRepository: ProductRepository) {}

  async createProduct(name: string, quantity: number, price: number, code: string) {
    const product = await this.productRepository.createProduct(name, quantity, price, code);
    return product;
  }

  async updateProduct(id: number, name: string, quantity: number, price: number, code: string) {
    const product = await this.productRepository.updateProduct(id, name, quantity, price, code);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async deleteProduct(id: number) {
    const product = await this.productRepository.deleteProduct(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async findProductById(id: number) {
    const product = await this.productRepository.findProductById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async findAllProducts() {
    const products = await this.productRepository.findAllProducts();
    return products;
  }
}
