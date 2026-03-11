import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDetPedidoInput {
  @Field(() => Int, { nullable: true })
  pedido_id?: number;
  @Field(() => Int, { nullable: true })
  producto_id?: number;
  @Field(() => Int, { nullable: true })
  cantidad?: number;
}
