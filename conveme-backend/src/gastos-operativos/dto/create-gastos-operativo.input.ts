import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateGastosOperativoInput {
  @Field(() => Int, { nullable: true })
  categoria_gasto_id?: number;
  @Field(() => Int, { nullable: true })
  empleado_id?: number;
  @Field(() => Int, { nullable: true })
  vendedor_id?: number;
  @Field(() => Int, { nullable: true })
  evento_id?: number;
  @Field(() => Float, { nullable: true })
  monto?: number;
  @Field({ nullable: true })
  fecha?: Date;
  @Field({ nullable: true })
  descripcion?: string;
  @Field({ nullable: true })
  comprobante_url?: string;
}
