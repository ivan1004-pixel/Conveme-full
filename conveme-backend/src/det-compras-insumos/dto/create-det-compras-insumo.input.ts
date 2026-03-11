import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateDetComprasInsumoInput {
  @Field(() => Int, { nullable: true })
  compra_insumo_id?: number;

  @Field(() => Int, { nullable: true })
  insumo_id?: number;

  @Field(() => Float, { nullable: true })
  cantidad_comprada?: number;

  @Field(() => Float, { nullable: true })
  costo_unitario?: number;
}
