import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreatePedidoInput {
  @Field(() => Int, { nullable: true })
  cliente_id?: number;
  @Field(() => Int, { nullable: true })
  vendedor_id?: number;
  @Field({ nullable: true })
  fecha_pedido?: Date;
  @Field({ nullable: true })
  estado_pedido?: string;
  @Field(() => Float, { nullable: true })
  monto_estimado?: number;
}
