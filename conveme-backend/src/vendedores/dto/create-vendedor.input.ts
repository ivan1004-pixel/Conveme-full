import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateVendedorInput {
  @Field(() => Int, { nullable: true })
  usuario_id?: number;

  @Field(() => Int, { nullable: true })
  escuela_id?: number;

  @Field({ nullable: true })
  nombre_completo?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  telefono?: string;

  @Field({ nullable: true })
  instagram_handle?: string;

  @Field({ nullable: true })
  calle_y_numero?: string;

  @Field({ nullable: true })
  colonia?: string;

  @Field({ nullable: true })
  codigo_postal?: string;

  @Field(() => Int, { nullable: true })
  municipio_id?: number;

  @Field({ nullable: true })
  facultad_o_campus?: string;

  @Field({ nullable: true })
  punto_entrega_habitual?: string;

  @Field({ nullable: true })
  estado_laboral?: string;

  @Field(() => Float, { nullable: true })
  comision_fija_menudeo?: number;

  @Field(() => Float, { nullable: true })
  comision_fija_mayoreo?: number;

  @Field(() => Float, { nullable: true })
  meta_ventas_mensual?: number;
}
