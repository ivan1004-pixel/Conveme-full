import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateComprasInsumoInput } from './create-compras-insumo.input';

@InputType()
export class UpdateComprasInsumoInput extends PartialType(CreateComprasInsumoInput) {
  @Field(() => Int) id_compra_insumo: number;
}
