import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAsignacionesVendedorInput {
  @Field(() => Int, { nullable: true }) vendedor_id?: number;
  @Field(() => Int, { nullable: true }) empleado_id?: number;
  @Field({ nullable: true }) fecha_asignacion?: Date;
  @Field({ nullable: true }) estado?: string;
}
