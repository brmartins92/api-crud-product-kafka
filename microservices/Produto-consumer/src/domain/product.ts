import crypto from 'node:crypto';

interface ProductProps {
  name: string;
  quantity: number;
  price: number;
  code: string;
}

export class Product {
  private _id: string;
  private props: ProductProps;

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get quantity(): number {
    return this.props.quantity;
  }

  get price(): number {
    return this.props.price;
  }

  get code(): string {
    return this.props.code;
  }

  constructor(props: ProductProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}