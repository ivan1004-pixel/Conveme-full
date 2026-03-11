import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GastosOperativosService } from './gastos-operativos.service';
import { GastosOperativo } from './entities/gastos-operativo.entity';
import { CreateGastosOperativoInput } from './dto/create-gastos-operativo.input';
import { UpdateGastosOperativoInput } from './dto/update-gastos-operativo.input';

@Resolver(() => GastosOperativo)
export class GastosOperativosResolver {
  constructor(private readonly service: GastosOperativosService) {}

  @Mutation(() => GastosOperativo)
  createGastosOperativo(@Args('createGastosOperativoInput') createInput: CreateGastosOperativoInput) {
    return this.service.create(createInput);
  }

  @Query(() => [GastosOperativo], { name: 'gastosOperativosList' })
  findAll() { return this.service.findAll(); }

  @Query(() => GastosOperativo, { name: 'gastosOperativo' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => GastosOperativo)
  updateGastosOperativo(@Args('updateGastosOperativoInput') updateInput: UpdateGastosOperativoInput) {
    return this.service.update(updateInput.id_gasto, updateInput);
  }

  @Mutation(() => GastosOperativo)
  removeGastosOperativo(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
