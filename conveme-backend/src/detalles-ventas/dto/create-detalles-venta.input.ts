import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateDetallesVentaInput {
  @Field(() => Int, { nullable: true })
  venta_id?: number;
  @Field(() => Int, { nullable: true })
  producto_id?: number;
  @Field(() => Int, { nullable: true })
  cantidad?: number;
  @Field({ nullable: true })
  aplico_mayoreo?: boolean;
  @Field(() => Float, { nullable: true })
  precio_unitario_historico?: number;
  @Field(() => Float, { nullable: true })
  subtotal?: number;
  @Field(() => Float, { nullable: true })
  monto_comision_generada?: number;
}
