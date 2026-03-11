import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EstadosService } from './estados.service';
import { Estado } from './entities/estado.entity';
import { CreateEstadoInput } from './dto/create-estado.input';
import { UpdateEstadoInput } from './dto/update-estado.input';

@Resolver(() => Estado)
export class EstadosResolver {
  constructor(private readonly estadosService: EstadosService) {}

  @Mutation(() => Estado)
  createEstado(@Args('createEstadoInput') createEstadoInput: CreateEstadoInput) {
    return this.estadosService.create(createEstadoInput);
  }

  @Query(() => [Estado], { name: 'estados' })
  findAll() {
    return this.estadosService.findAll();
  }

  @Query(() => Estado, { name: 'estado' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.estadosService.findOne(id);
  }

  @Mutation(() => Estado)
  updateEstado(@Args('updateEstadoInput') updateEstadoInput: UpdateEstadoInput) {
    return this.estadosService.update(updateEstadoInput.id_estado, updateEstadoInput);
  }

  @Mutation(() => Estado)
  removeEstado(@Args('id', { type: () => Int }) id: number) {
    return this.estadosService.remove(id);
  }
}