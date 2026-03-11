import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DetCortesInventarioService } from './det-cortes-inventario.service';
import { DetCortesInventario } from './entities/det-cortes-inventario.entity';
import { CreateDetCortesInventarioInput } from './dto/create-det-cortes-inventario.input';
import { UpdateDetCortesInventarioInput } from './dto/update-det-cortes-inventario.input';

@Resolver(() => DetCortesInventario)
export class DetCortesInventarioResolver {
  constructor(private readonly service: DetCortesInventarioService) {}

  @Mutation(() => DetCortesInventario)
  createDetCortesInventario(@Args('createDetCortesInventarioInput') createInput: CreateDetCortesInventarioInput) {
    return this.service.create(createInput);
  }

  @Query(() => [DetCortesInventario], { name: 'detCortesInventarios' })
  findAll() { return this.service.findAll(); }

  @Query(() => DetCortesInventario, { name: 'detCortesInventario' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => DetCortesInventario)
  updateDetCortesInventario(@Args('updateDetCortesInventarioInput') updateInput: UpdateDetCortesInventarioInput) {
    return this.service.update(updateInput.id_det_corte, updateInput);
  }

  @Mutation(() => DetCortesInventario)
  removeDetCortesInventario(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
