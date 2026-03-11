import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreatePromocionInput {
  @Field({ nullable: true })
  nombre?: string;
  @Field({ nullable: true })
  tipo_descuento?: string;
  @Field(() => Float, { nullable: true })
  valor_descuento?: number;
  @Field({ nullable: true })
  fecha_inicio?: Date;
  @Field({ nullable: true })
  fecha_fin?: Date;
  @Field({ nullable: true })
  activa?: boolean;
}
