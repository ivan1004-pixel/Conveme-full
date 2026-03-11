import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAsignacionesVendedorInput } from './create-asignaciones-vendedor.input';

@InputType()
export class UpdateAsignacionesVendedorInput extends PartialType(CreateAsignacionesVendedorInput) {
  @Field(() => Int) id_asignacion: number;
}
