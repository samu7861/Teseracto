import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Order, OrderRelations, Producto, Persona, Admin} from '../models';
import {ProductoRepository} from './producto.repository';
import {PersonaRepository} from './persona.repository';
import {AdminRepository} from './admin.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly productos: HasManyRepositoryFactory<Producto, typeof Order.prototype.id>;

  public readonly persona: BelongsToAccessor<Persona, typeof Order.prototype.id>;

  public readonly admin: BelongsToAccessor<Admin, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('ProductoRepository') protected productoRepositoryGetter: Getter<ProductoRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>, @repository.getter('AdminRepository') protected adminRepositoryGetter: Getter<AdminRepository>,
  ) {
    super(Order, dataSource);
    this.admin = this.createBelongsToAccessorFor('admin', adminRepositoryGetter,);
    this.registerInclusionResolver('admin', this.admin.inclusionResolver);
    this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter,);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
}
