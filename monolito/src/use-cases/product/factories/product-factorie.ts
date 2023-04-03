
import { ProductRepository } from '../../../repositories/product-repository';
import { ProductService } from '../create-product';


export function makeCreateProductUseCase() {
  const productRepository = new ProductRepository()
  const useCase = new ProductService(productRepository)

  return useCase
}