import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDetCortesInventarioInput } from './create-det-cortes-inventario.input';

@InputType()
export class UpdateDetCortesInventarioInput extends PartialType(CreateDetCortesInventarioInput) {
  @Field(() => Int) id_det_corte: number;
}
