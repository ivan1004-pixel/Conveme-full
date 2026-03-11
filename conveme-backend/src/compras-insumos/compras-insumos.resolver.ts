import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComprasInsumosService } from './compras-insumos.service';
import { ComprasInsumo } from './entities/compras-insumo.entity';
import { CreateComprasInsumoInput } from './dto/create-compras-insumo.input';
import { UpdateComprasInsumoInput } from './dto/update-compras-insumo.input';

@Resolver(() => ComprasInsumo)
export class ComprasInsumosResolver {
  constructor(private readonly service: ComprasInsumosService) {}

  @Mutation(() => ComprasInsumo)
  createComprasInsumo(@Args('createComprasInsumoInput') createInput: CreateComprasInsumoInput) {
    return this.service.create(createInput);
  }

  @Query(() => [ComprasInsumo], { name: 'comprasInsumos' })
  findAll() { return this.service.findAll(); }

  @Query(() => ComprasInsumo, { name: 'comprasInsumo' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => ComprasInsumo)
  updateComprasInsumo(@Args('updateComprasInsumoInput') updateInput: UpdateComprasInsumoInput) {
    return this.service.update(updateInput.id_compra_insumo, updateInput);
  }

  @Mutation(() => ComprasInsumo)
  removeComprasInsumo(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
