import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreatePagosVendedorInput {
  @Field(() => Int, { nullable: true })
  vendedor_id?: number;
  @Field(() => Int, { nullable: true })
  empleado_id?: number;
  @Field({ nullable: true }) fecha_pago?: Date;
  @Field(() => Float, { nullable: true })
  monto_pagado?: number;
  @Field({ nullable: true })
  concepto_pago?: string;
  @Field(() => Int, { nullable: true })
  cuenta_destino_id?: number;
  @Field({ nullable: true })
  comprobante_url?: string;
}
