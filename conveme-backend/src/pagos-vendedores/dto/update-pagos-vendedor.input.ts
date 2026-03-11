import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePagosVendedorInput } from './create-pagos-vendedor.input';

@InputType()
export class UpdatePagosVendedorInput extends PartialType(CreatePagosVendedorInput) {
  @Field(() => Int) id_pago: number;
}
