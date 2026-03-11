import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductoInput {
  @Field({ nullable: true })
  sku?: string;

  @Field({ nullable: true })
  nombre?: string;

  @Field(() => Int, { nullable: true })
  categoria_id?: number;

  @Field(() => Int, { nullable: true })
  tamano_id?: number;

  @Field(() => Float, { nullable: true })
  precio_unitario?: number;

  @Field(() => Float, { nullable: true })
  precio_mayoreo?: number;

  @Field(() => Int, { nullable: true })
  cantidad_minima_mayoreo?: number;

  @Field(() => Float, { nullable: true })
  costo_produccion?: number;

  @Field({ nullable: true })
  activo?: boolean;
}
