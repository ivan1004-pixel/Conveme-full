import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateMovimientosInventarioInput } from './create-movimientos-inventario.input';

@InputType()
export class UpdateMovimientosInventarioInput extends PartialType(CreateMovimientosInventarioInput) {
  @Field(() => Int) id_movimiento: number;
}
