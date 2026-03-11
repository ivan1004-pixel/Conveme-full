import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateEventoInput {
  @Field({ nullable: true }) nombre?: string;
  @Field({ nullable: true }) descripcion?: string;
  @Field({ nullable: true }) fecha_inicio?: Date;
  @Field({ nullable: true }) fecha_fin?: Date;
  @Field(() => Int, { nullable: true }) escuela_id?: number;
  @Field(() => Int, { nullable: true }) municipio_id?: number;
  @Field(() => Float, { nullable: true }) costo_stand?: number;
  @Field({ nullable: true }) activo?: boolean;
}
