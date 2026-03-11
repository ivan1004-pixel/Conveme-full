import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DetComprasInsumosService } from './det-compras-insumos.service';
import { DetComprasInsumo } from './entities/det-compras-insumo.entity';
import { CreateDetComprasInsumoInput } from './dto/create-det-compras-insumo.input';
import { UpdateDetComprasInsumoInput } from './dto/update-det-compras-insumo.input';

@Resolver(() => DetComprasInsumo)
export class DetComprasInsumosResolver {
  constructor(private readonly service: DetComprasInsumosService) {}

  @Mutation(() => DetComprasInsumo)
  createDetComprasInsumo(@Args('createDetComprasInsumoInput') createInput: CreateDetComprasInsumoInput) {
    return this.service.create(createInput);
  }

  @Query(() => [DetComprasInsumo], { name: 'detComprasInsumos' })
  findAll() { return this.service.findAll(); }

  @Query(() => DetComprasInsumo, { name: 'detComprasInsumo' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => DetComprasInsumo)
  updateDetComprasInsumo(@Args('updateDetComprasInsumoInput') updateInput: UpdateDetComprasInsumoInput) {
    return this.service.update(updateInput.id_det_compra, updateInput);
  }

  @Mutation(() => DetComprasInsumo)
  removeDetComprasInsumo(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
