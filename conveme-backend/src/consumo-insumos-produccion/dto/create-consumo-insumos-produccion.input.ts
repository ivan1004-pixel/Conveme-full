import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateConsumoInsumosProduccionInput {
  @Field(() => Int, { nullable: true })
  orden_produccion_id?: number;
  @Field(() => Int, { nullable: true })
  insumo_id?: number;
  @Field(() => Float, { nullable: true })
  cantidad_utilizada?: number;
}
