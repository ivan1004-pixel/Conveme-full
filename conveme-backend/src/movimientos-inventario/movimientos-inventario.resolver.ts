import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientosInventario } from './entities/movimientos-inventario.entity';
import { CreateMovimientosInventarioInput } from './dto/create-movimientos-inventario.input';
import { UpdateMovimientosInventarioInput } from './dto/update-movimientos-inventario.input';

@Resolver(() => MovimientosInventario)
export class MovimientosInventarioResolver {
  constructor(private readonly service: MovimientosInventarioService) {}

  @Mutation(() => MovimientosInventario)
  createMovimientosInventario(@Args('createMovimientosInventarioInput') createInput: CreateMovimientosInventarioInput) {
    return this.service.create(createInput);
  }

  @Query(() => [MovimientosInventario], { name: 'movimientosInventario' })
  findAll() { return this.service.findAll(); }

  @Query(() => MovimientosInventario, { name: 'movimientoInventario' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => MovimientosInventario)
  updateMovimientosInventario(@Args('updateMovimientosInventarioInput') updateInput: UpdateMovimientosInventarioInput) {
    return this.service.update(updateInput.id_movimiento, updateInput);
  }

  @Mutation(() => MovimientosInventario)
  removeMovimientosInventario(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
