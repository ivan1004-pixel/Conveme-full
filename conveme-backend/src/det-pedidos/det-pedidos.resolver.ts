import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DetPedidosService } from './det-pedidos.service';
import { DetPedido } from './entities/det-pedido.entity';
import { CreateDetPedidoInput } from './dto/create-det-pedido.input';
import { UpdateDetPedidoInput } from './dto/update-det-pedido.input';

@Resolver(() => DetPedido)
export class DetPedidosResolver {
  constructor(private readonly service: DetPedidosService) {}

  @Mutation(() => DetPedido)
  createDetPedido(@Args('createDetPedidoInput') createInput: CreateDetPedidoInput) {
    return this.service.create(createInput);
  }

  @Query(() => [DetPedido], { name: 'detPedidos' })
  findAll() { return this.service.findAll(); }

  @Query(() => DetPedido, { name: 'detPedido' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => DetPedido)
  updateDetPedido(@Args('updateDetPedidoInput') updateInput: UpdateDetPedidoInput) {
    return this.service.update(updateInput.id_det_pedido, updateInput);
  }

  @Mutation(() => DetPedido)
  removeDetPedido(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
