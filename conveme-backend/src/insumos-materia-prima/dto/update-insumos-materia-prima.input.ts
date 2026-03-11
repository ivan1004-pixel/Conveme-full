import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateInsumosMateriaPrimaInput } from './create-insumos-materia-prima.input';

@InputType()
export class UpdateInsumosMateriaPrimaInput extends PartialType(CreateInsumosMateriaPrimaInput) {
  @Field(() => Int) id_insumo: number;
}
