import { makeCreateProductUseCase } from "../../use-cases/product/factories/product-factorie";
import { postKafkaRegisterProduct } from "../../utils/requestKafkaRegisterProduct";

export const createProductController = async (req, res) => {
  console.log(req);
  
  const { name, quantity, price, code } = req.body;

  try {
    const createProduct = await makeCreateProductUseCase();
    const product = await createProduct.createProduct(name, quantity, price, code);
    const kafka = postKafkaRegisterProduct({ name, quantity, price, code });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating product');
  }
  
}