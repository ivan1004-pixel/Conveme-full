import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DetAsignacionesService } from './det-asignaciones.service';
import { DetAsignacion } from './entities/det-asignacion.entity';
import { CreateDetAsignacionInput } from './dto/create-det-asignacion.input';
import { UpdateDetAsignacionInput } from './dto/update-det-asignacion.input';

@Resolver(() => DetAsignacion)
export class DetAsignacionesResolver {
  constructor(private readonly service: DetAsignacionesService) {}

  @Mutation(() => DetAsignacion)
  createDetAsignacion(@Args('createDetAsignacionInput') createInput: CreateDetAsignacionInput) {
    return this.service.create(createInput);
  }

  @Query(() => [DetAsignacion], { name: 'detAsignaciones' })
  findAll() { return this.service.findAll(); }

  @Query(() => DetAsignacion, { name: 'detAsignacion' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => DetAsignacion)
  updateDetAsignacion(@Args('updateDetAsignacionInput') updateInput: UpdateDetAsignacionInput) {
    return this.service.update(updateInput.id_det_asignacion, updateInput);
  }

  @Mutation(() => DetAsignacion)
  removeDetAsignacion(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
