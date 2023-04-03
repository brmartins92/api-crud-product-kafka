import { Product } from "../../domain/product";
import { PrismaProductRepository } from "../../infra/database/prisma/repositories/prisma-product-repository";
import { ProductRepository } from "../repositories/product-repository";

interface ProductRequest {
  name: string,
  quantity: number,
  price: number,
  code:string
}

export class EnrollStudentToCourse {
  constructor(
    private prismaProductRepository: PrismaProductRepository
  ) {}

  async execute(request: ProductRequest): Promise<void> {
      const data = {
        name: request.name,
        quantity: request.quantity,
        price:request.price,
        code:request.code,
      };

      console.log("aqui",request);
  
      await this.prismaProductRepository.create(data);
      
  
  }
}