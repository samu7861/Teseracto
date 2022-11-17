import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Order,
  Persona,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderPersonaController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/persona', {
    responses: {
      '200': {
        description: 'Persona belonging to Order',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Persona)},
          },
        },
      },
    },
  })
  async getPersona(
    @param.path.string('id') id: typeof Order.prototype.id,
  ): Promise<Persona> {
    return this.orderRepository.persona(id);
  }
}
