import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateSaldoVendedorInput {
  @Field(() => Int, { nullable: true }) vendedor_id?: number;
  @Field(() => Float, { nullable: true })
  comisiones_acumuladas?: number;
  @Field(() => Float, { nullable: true })
  deuda_por_faltantes?: number;
}
