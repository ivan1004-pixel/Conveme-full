import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEmpleadoInput {
  @Field(() => Int, { nullable: true })
  usuario_id?: number;

  @Field({ nullable: true })
  nombre_completo?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  telefono?: string;

  @Field({ nullable: true })
  puesto?: string;

  @Field({ nullable: true })
  calle_y_numero?: string;

  @Field({ nullable: true })
  colonia?: string;

  @Field({ nullable: true })
  codigo_postal?: string;

  @Field(() => Int, { nullable: true })
  municipio_id?: number;
}
