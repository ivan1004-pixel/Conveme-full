import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InventarioNegocioService } from './inventario-negocio.service';
import { InventarioNegocio } from './entities/inventario-negocio.entity';
import { CreateInventarioNegocioInput } from './dto/create-inventario-negocio.input';
import { UpdateInventarioNegocioInput } from './dto/update-inventario-negocio.input';

@Resolver(() => InventarioNegocio)
export class InventarioNegocioResolver {
  constructor(private readonly service: InventarioNegocioService) {}

  @Mutation(() => InventarioNegocio)
  createInventarioNegocio(@Args('createInventarioNegocioInput') createInput: CreateInventarioNegocioInput) {
    return this.service.create(createInput);
  }

  @Query(() => [InventarioNegocio], { name: 'inventariosNegocio' })
  findAll() { return this.service.findAll(); }

  @Query(() => InventarioNegocio, { name: 'inventarioNegocio' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => InventarioNegocio)
  updateInventarioNegocio(@Args('updateInventarioNegocioInput') updateInput: UpdateInventarioNegocioInput) {
    return this.service.update(updateInput.id_inventario, updateInput);
  }

  @Mutation(() => InventarioNegocio)
  removeInventarioNegocio(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
