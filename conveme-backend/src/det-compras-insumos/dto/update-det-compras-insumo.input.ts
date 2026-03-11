import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDetComprasInsumoInput } from './create-det-compras-insumo.input';

@InputType()
export class UpdateDetComprasInsumoInput extends PartialType(CreateDetComprasInsumoInput) {
  @Field(() => Int) id_det_compra: number;
}
