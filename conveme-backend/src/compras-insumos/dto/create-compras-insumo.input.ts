import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateComprasInsumoInput {
  @Field({ nullable: true })
  fecha_compra?: Date;

  @Field({ nullable: true })
  proveedor?: string;

  @Field(() => Float, { nullable: true })
  monto_total?: number;

  @Field(() => Int, { nullable: true })
  empleado_id?: number;

  @Field({ nullable: true })
  comprobante_url?: string;
}
