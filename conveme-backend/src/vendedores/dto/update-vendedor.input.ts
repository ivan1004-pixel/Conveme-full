import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateVendedorInput } from './create-vendedor.input';

@InputType()
export class UpdateVendedorInput extends PartialType(CreateVendedorInput) {
  @Field(() => Int)
  id_vendedor: number;
}
