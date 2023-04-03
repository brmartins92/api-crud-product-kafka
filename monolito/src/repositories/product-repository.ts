import { PrismaClient, Product } from '@prisma/client';
import { IProductRepository } from './interface/product-interface';


export class ProductRepository implements IProductRepository {

  private prisma = new PrismaClient();

  async createProduct(name: string, quantity: number, price: number, code: string): Promise<Product> {
   
    const data = {
      name,
      quantity,
      price,
      code,
    };

    const product = await this.prisma.product.create({
      data
    });
    
   return product || null;
    
  }

  async updateProduct(id: number, name: string, quantity: number, price: number, code: string): Promise<Product | null> {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        quantity,
        price,
        code,
      },
    });
    return product;
  }

  async deleteProduct(id: number): Promise<Product | null> {
    const product = await this.prisma.product.delete({
      where: {
        id,
      },
    });
    return product;
  }

  async findProductById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  }

  async findAllProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }
}
