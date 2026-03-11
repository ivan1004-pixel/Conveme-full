import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PedidosService } from './pedidos.service';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';

@Resolver(() => Pedido)
export class PedidosResolver {
  constructor(private readonly service: PedidosService) {}

  @Mutation(() => Pedido)
  createPedido(@Args('createPedidoInput') createInput: CreatePedidoInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Pedido], { name: 'pedidos' })
  findAll() { return this.service.findAll(); }

  @Query(() => Pedido, { name: 'pedido' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => Pedido)
  updatePedido(@Args('updatePedidoInput') updateInput: UpdatePedidoInput) {
    return this.service.update(updateInput.id_pedido, updateInput);
  }

  @Mutation(() => Pedido)
  removePedido(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
