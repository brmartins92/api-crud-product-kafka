import { Product } from "../../domain/product";

export interface ProductRepository {
  create(course: Product): Promise<void>;
}