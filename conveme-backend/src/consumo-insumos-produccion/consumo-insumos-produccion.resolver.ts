import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsumoInsumosProduccionService } from './consumo-insumos-produccion.service';
import { ConsumoInsumosProduccion } from './entities/consumo-insumos-produccion.entity';
import { CreateConsumoInsumosProduccionInput } from './dto/create-consumo-insumos-produccion.input';
import { UpdateConsumoInsumosProduccionInput } from './dto/update-consumo-insumos-produccion.input';

@Resolver(() => ConsumoInsumosProduccion)
export class ConsumoInsumosProduccionResolver {
  constructor(private readonly service: ConsumoInsumosProduccionService) {}

  @Mutation(() => ConsumoInsumosProduccion)
  createConsumoInsumosProduccion(@Args('createConsumoInsumosProduccionInput') createInput: CreateConsumoInsumosProduccionInput) {
    return this.service.create(createInput);
  }

  @Query(() => [ConsumoInsumosProduccion], { name: 'consumosInsumosProduccion' })
  findAll() { return this.service.findAll(); }

  @Query(() => ConsumoInsumosProduccion, { name: 'consumoInsumosProduccion' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => ConsumoInsumosProduccion)
  updateConsumoInsumosProduccion(@Args('updateConsumoInsumosProduccionInput') updateInput: UpdateConsumoInsumosProduccionInput) {
    return this.service.update(updateInput.id_consumo, updateInput);
  }

  @Mutation(() => ConsumoInsumosProduccion)
  removeConsumoInsumosProduccion(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
