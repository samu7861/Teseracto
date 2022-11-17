import {Entity, model, property, hasOne} from '@loopback/repository';
import {Order} from './order.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
    required: true,
  })
  Lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  Mail: string;

  @property({
    type: 'string',
    required: true,
  })
  Number: string;

  @property({
    type: 'string',
    required: true,
  })
  Password: string;

  @hasOne(() => Order)
  order: Order;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
