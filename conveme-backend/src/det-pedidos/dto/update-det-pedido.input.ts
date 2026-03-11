import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDetPedidoInput } from './create-det-pedido.input';

@InputType()
export class UpdateDetPedidoInput extends PartialType(CreateDetPedidoInput) {
  @Field(() => Int) id_det_pedido: number;
}
