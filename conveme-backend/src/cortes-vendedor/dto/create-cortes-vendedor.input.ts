import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateCortesVendedorInput {
  @Field(() => Int, { nullable: true })
  vendedor_id?: number;
  @Field(() => Int, { nullable: true })
  asignacion_id?: number;
  @Field({ nullable: true })
  fecha_corte?: Date;
  @Field(() => Float, { nullable: true })
  dinero_esperado?: number;
  @Field(() => Float, { nullable: true })
  dinero_total_entregado?: number;
  @Field(() => Float, { nullable: true })
  diferencia_corte?: number;
  @Field({ nullable: true }) observaciones?: string;
}
