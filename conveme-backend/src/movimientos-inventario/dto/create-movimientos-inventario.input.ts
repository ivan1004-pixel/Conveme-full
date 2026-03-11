import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMovimientosInventarioInput {
  @Field(() => Int, { nullable: true })
  producto_id?: number;
  @Field(() => Int, { nullable: true })
  usuario_id?: number;
  @Field({ nullable: true })
  tipo_movimiento?: string;
  @Field(() => Int, { nullable: true })
  cantidad?: number;
  @Field({ nullable: true })
  motivo?: string;
}
