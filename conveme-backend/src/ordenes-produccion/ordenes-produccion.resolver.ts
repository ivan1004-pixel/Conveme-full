import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdenesProduccionService } from './ordenes-produccion.service';
import { OrdenesProduccion } from './entities/ordenes-produccion.entity';
import { CreateOrdenesProduccionInput } from './dto/create-ordenes-produccion.input';
import { UpdateOrdenesProduccionInput } from './dto/update-ordenes-produccion.input';

@Resolver(() => OrdenesProduccion)
export class OrdenesProduccionResolver {
  constructor(private readonly service: OrdenesProduccionService) {}

  @Mutation(() => OrdenesProduccion)
  createOrdenesProduccion(@Args('createOrdenesProduccionInput') createInput: CreateOrdenesProduccionInput) {
    return this.service.create(createInput);
  }

  @Query(() => [OrdenesProduccion], { name: 'ordenesProduccion' })
  findAll() { return this.service.findAll(); }

  @Query(() => OrdenesProduccion, { name: 'ordenProduccion' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => OrdenesProduccion)
  updateOrdenesProduccion(@Args('updateOrdenesProduccionInput') updateInput: UpdateOrdenesProduccionInput) {
    return this.service.update(updateInput.id_orden, updateInput);
  }

  @Mutation(() => OrdenesProduccion)
  removeOrdenesProduccion(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
