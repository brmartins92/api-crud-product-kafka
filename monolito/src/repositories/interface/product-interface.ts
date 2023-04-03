import { Product } from ".prisma/client";

export interface IProductRepository {
  createProduct(name: string, quantity: number, price: number, code: string): Promise<Product>;
  updateProduct(id: number, name: string, quantity: number, price: number, code: string): Promise<Product | null>;
  deleteProduct(id: number): Promise<Product | null>;
  findProductById(id: number): Promise<Product | null>;
  findAllProducts(): Promise<Product[]>;
}