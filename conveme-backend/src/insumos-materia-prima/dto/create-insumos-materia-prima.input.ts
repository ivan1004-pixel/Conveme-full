import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateInsumosMateriaPrimaInput {
  @Field() nombre: string;
  @Field({ nullable: true }) unidad_medida?: string;
  @Field(() => Float, { nullable: true }) stock_actual?: number;
  @Field(() => Float, { nullable: true }) stock_minimo_alerta?: number;
}
