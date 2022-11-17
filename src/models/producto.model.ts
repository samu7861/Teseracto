import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Price: number;

  @property({
    type: 'string',
    required: true,
  })
  Material: string;

  @property({
    type: 'string',
    required: true,
  })
  Picture: string;

  @property({
    type: 'number',
    required: false,
  })
  Discount: number;

  @property({
    type: 'string',
  })
  orderId?: string;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
