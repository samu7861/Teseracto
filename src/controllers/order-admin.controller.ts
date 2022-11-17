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
  Admin,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderAdminController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/admin', {
    responses: {
      '200': {
        description: 'Admin belonging to Order',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Admin)},
          },
        },
      },
    },
  })
  async getAdmin(
    @param.path.string('id') id: typeof Order.prototype.id,
  ): Promise<Admin> {
    return this.orderRepository.admin(id);
  }
}
