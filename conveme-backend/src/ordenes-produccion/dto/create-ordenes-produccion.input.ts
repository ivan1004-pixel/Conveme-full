import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrdenesProduccionInput {
  @Field(() => Int, { nullable: true }) producto_id?: number;
  @Field(() => Int, { nullable: true }) empleado_id?: number;
  @Field({ nullable: true }) fecha_produccion?: Date;
  @Field(() => Int, { nullable: true }) cantidad_fabricada?: number;
  @Field(() => Int, { nullable: true }) mermas_produccion?: number;
  @Field(() => Float, { nullable: true }) costo_operativo_lote?: number;
  @Field({ nullable: true }) estado?: string;
}
