
import { MessagingAdapter } from "../adapters/messaging-adapter";

interface RegisterProductRequest {
  name: string;
  quantity:number,
  price:number,
  code:string
}

export class PurchaseProduct {
  constructor(
    private messagingAdapter: MessagingAdapter,
  ) {}

  async execute({ name, quantity, price, code }: RegisterProductRequest): Promise<void> {
    console.log(name);

    await this.messagingAdapter.sendMessage('purchases.new-purchase', {
      product: {
        quantity: quantity,
        price: price,
        code : code,
        name: name
      },
    })
  }
}