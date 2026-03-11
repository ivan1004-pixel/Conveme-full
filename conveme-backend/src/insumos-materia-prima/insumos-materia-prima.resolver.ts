import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InsumosMateriaPrimaService } from './insumos-materia-prima.service';
import { InsumosMateriaPrima } from './entities/insumos-materia-prima.entity';
import { CreateInsumosMateriaPrimaInput } from './dto/create-insumos-materia-prima.input';
import { UpdateInsumosMateriaPrimaInput } from './dto/update-insumos-materia-prima.input';

@Resolver(() => InsumosMateriaPrima)
export class InsumosMateriaPrimaResolver {
  constructor(private readonly service: InsumosMateriaPrimaService) {}

  @Mutation(() => InsumosMateriaPrima)
  createInsumosMateriaPrima(@Args('createInsumosMateriaPrimaInput') createInput: CreateInsumosMateriaPrimaInput) {
    return this.service.create(createInput);
  }

  @Query(() => [InsumosMateriaPrima], { name: 'insumosMateriaPrima' })
  findAll() { return this.service.findAll(); }

  @Query(() => InsumosMateriaPrima, { name: 'insumoMateriaPrima' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => InsumosMateriaPrima)
  updateInsumosMateriaPrima(@Args('updateInsumosMateriaPrimaInput') updateInput: UpdateInsumosMateriaPrimaInput) {
    return this.service.update(updateInput.id_insumo, updateInput);
  }

  @Mutation(() => InsumosMateriaPrima)
  removeInsumosMateriaPrima(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
