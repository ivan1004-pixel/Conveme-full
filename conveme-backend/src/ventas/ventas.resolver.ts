import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VentasService } from './ventas.service';
import { Venta } from './entities/venta.entity';
import { CreateVentaInput } from './dto/create-venta.input';
import { UpdateVentaInput } from './dto/update-venta.input';

@Resolver(() => Venta)
export class VentasResolver {
  constructor(private readonly service: VentasService) {}

  @Mutation(() => Venta)
  createVenta(@Args('createVentaInput') createInput: CreateVentaInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Venta], { name: 'ventas' })
  findAll() { return this.service.findAll(); }

  @Query(() => Venta, { name: 'venta' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => Venta)
  updateVenta(@Args('updateVentaInput') updateInput: UpdateVentaInput) {
    return this.service.update(updateInput.id_venta, updateInput);
  }

  @Mutation(() => Venta)
  removeVenta(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
