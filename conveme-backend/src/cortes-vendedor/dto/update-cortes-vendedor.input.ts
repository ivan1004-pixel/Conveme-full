import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCortesVendedorInput } from './create-cortes-vendedor.input';

@InputType()
export class UpdateCortesVendedorInput extends PartialType(CreateCortesVendedorInput) {
  @Field(() => Int) id_corte: number;
}
