import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DetallesVentasService } from './detalles-ventas.service';
import { DetallesVenta } from './entities/detalles-venta.entity';
import { CreateDetallesVentaInput } from './dto/create-detalles-venta.input';
import { UpdateDetallesVentaInput } from './dto/update-detalles-venta.input';

@Resolver(() => DetallesVenta)
export class DetallesVentasResolver {
  constructor(private readonly service: DetallesVentasService) {}

  @Mutation(() => DetallesVenta)
  createDetallesVenta(@Args('createDetallesVentaInput') createInput: CreateDetallesVentaInput) {
    return this.service.create(createInput);
  }

  @Query(() => [DetallesVenta], { name: 'detallesVentas' })
  findAll() { return this.service.findAll(); }

  @Query(() => DetallesVenta, { name: 'detallesVenta' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => DetallesVenta)
  updateDetallesVenta(@Args('updateDetallesVentaInput') updateInput: UpdateDetallesVentaInput) {
    return this.service.update(updateInput.id_det_venta, updateInput);
  }

  @Mutation(() => DetallesVenta)
  removeDetallesVenta(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
