import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AsignacionesVendedorService } from './asignaciones-vendedor.service';
import { AsignacionesVendedor } from './entities/asignaciones-vendedor.entity';
import { CreateAsignacionesVendedorInput } from './dto/create-asignaciones-vendedor.input';
import { UpdateAsignacionesVendedorInput } from './dto/update-asignaciones-vendedor.input';

@Resolver(() => AsignacionesVendedor)
export class AsignacionesVendedorResolver {
  constructor(private readonly service: AsignacionesVendedorService) {}

  @Mutation(() => AsignacionesVendedor)
  createAsignacionesVendedor(@Args('createAsignacionesVendedorInput') createInput: CreateAsignacionesVendedorInput) {
    return this.service.create(createInput);
  }

  @Query(() => [AsignacionesVendedor], { name: 'asignacionesVendedor' })
  findAll() { return this.service.findAll(); }

  @Query(() => AsignacionesVendedor, { name: 'asignacionVendedor' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => AsignacionesVendedor)
  updateAsignacionesVendedor(@Args('updateAsignacionesVendedorInput') updateInput: UpdateAsignacionesVendedorInput) {
    return this.service.update(updateInput.id_asignacion, updateInput);
  }

  @Mutation(() => AsignacionesVendedor)
  removeAsignacionesVendedor(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
