import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Producto} from './producto.model';
import {Persona} from './persona.model';
import {Admin} from './admin.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  Purhcasedate: string;

  @property({
    type: 'date',
    required: true,
  })
  Deliverydate: string;

  @property({
    type: 'string',
    required: true,
  })
  id_producto: string;

  @property({
    type: 'number',
    required: true,
  })
  Total: string;

  @hasMany(() => Producto)
  productos: Producto[];

  @belongsTo(() => Persona)
  personaId: string;

  @belongsTo(() => Admin)
  adminId: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
