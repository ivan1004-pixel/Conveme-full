import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriasGastoService } from './categorias-gasto.service';
import { CategoriasGasto } from './entities/categorias-gasto.entity';
import { CreateCategoriasGastoInput } from './dto/create-categorias-gasto.input';
import { UpdateCategoriasGastoInput } from './dto/update-categorias-gasto.input';

@Resolver(() => CategoriasGasto)
export class CategoriasGastoResolver {
  constructor(private readonly service: CategoriasGastoService) {}

  @Mutation(() => CategoriasGasto)
  createCategoriasGasto(@Args('createCategoriasGastoInput') createInput: CreateCategoriasGastoInput) {
    return this.service.create(createInput);
  }

  @Query(() => [CategoriasGasto], { name: 'categoriasGastoList' }) // nombre modificado ligeramente para evitar conflictos con plurales raros
  findAll() { return this.service.findAll(); }

  @Query(() => CategoriasGasto, { name: 'categoriasGasto' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => CategoriasGasto)
  updateCategoriasGasto(@Args('updateCategoriasGastoInput') updateInput: UpdateCategoriasGastoInput) {
    return this.service.update(updateInput.id_categoria_gasto, updateInput);
  }

  @Mutation(() => CategoriasGasto)
  removeCategoriasGasto(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
