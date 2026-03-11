import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './entities/empleado.entity';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';

@Resolver(() => Empleado)
export class EmpleadosResolver {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Mutation(() => Empleado)
  createEmpleado(@Args('createEmpleadoInput') createEmpleadoInput: CreateEmpleadoInput) {
    return this.empleadosService.create(createEmpleadoInput);
  }

  @Query(() => [Empleado], { name: 'empleados' })
  findAll() {
    return this.empleadosService.findAll();
  }

  @Query(() => Empleado, { name: 'empleado' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.empleadosService.findOne(id);
  }

  @Mutation(() => Empleado)
  updateEmpleado(@Args('updateEmpleadoInput') updateEmpleadoInput: UpdateEmpleadoInput) {
    return this.empleadosService.update(updateEmpleadoInput.id_empleado, updateEmpleadoInput);
  }

  @Mutation(() => Empleado)
  removeEmpleado(@Args('id', { type: () => Int }) id: number) {
    return this.empleadosService.remove(id);
  }
}
