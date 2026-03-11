import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateGastosOperativoInput } from './create-gastos-operativo.input';

@InputType()
export class UpdateGastosOperativoInput extends PartialType(CreateGastosOperativoInput) {
  @Field(() => Int) id_gasto: number;
}
