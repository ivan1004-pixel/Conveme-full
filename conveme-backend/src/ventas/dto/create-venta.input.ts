import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateVentaInput {
  @Field(() => Int, { nullable: true })
  vendedor_id?: number;
  @Field(() => Int, { nullable: true })
  cliente_id?: number;
  @Field(() => Int, { nullable: true })
  pedido_id?: number;
  @Field(() => Int, { nullable: true })
  evento_id?: number;
  @Field(() => Int, { nullable: true })
  promocion_id?: number;
  @Field(() => Float, { nullable: true })
  monto_total?: number;
  @Field({ nullable: true }) metodo_pago?: string;
  @Field(() => Float, { nullable: true })
  dinero_recibido?: number;
  @Field(() => Float, { nullable: true })
  cambio_devuelto?: number;
}
