import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateInventarioNegocioInput {
  @Field(() => Int, { nullable: true })
  producto_id?: number;
  @Field(() => Int, { nullable: true })
  stock_actual?: number;
  @Field(() => Int, { nullable: true })
  stock_minimo_alerta?: number;
}
