import { ProductRepository } from "../../../../application/repositories/product-repository";
import { Product } from "../../../../domain/product";
import { prisma } from "../prisma";

export class PrismaProductRepository implements ProductRepository {
 
  async create(product: any): Promise<void> {
    
    
   const prod = await prisma.salesItem.create({
      data: {
        quantity: 2,
        price: product.price,
        code: product.code,
        name: product.name
      },
    })
    
    console.log(prod);
  }
}
