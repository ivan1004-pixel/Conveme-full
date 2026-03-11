import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCuentasBancariasVendedorInput {
  @Field(() => Int, { nullable: true })
  vendedor_id?: number;
  @Field({ nullable: true })
  banco?: string;
  @Field({ nullable: true })
  titular_cuenta?: string;
  @Field({ nullable: true })
  clabe_interbancaria?: string;
  @Field({ nullable: true })
  es_principal?: boolean;
}
