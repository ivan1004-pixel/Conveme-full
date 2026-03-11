import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCuentasBancariasVendedorInput } from './create-cuentas-bancarias-vendedor.input';

@InputType()
export class UpdateCuentasBancariasVendedorInput extends PartialType(CreateCuentasBancariasVendedorInput) {
  @Field(() => Int) id_cuenta: number;
}
