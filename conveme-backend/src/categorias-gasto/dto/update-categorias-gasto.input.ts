import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCategoriasGastoInput } from './create-categorias-gasto.input';

@InputType()
export class UpdateCategoriasGastoInput extends PartialType(CreateCategoriasGastoInput) {
  @Field(() => Int) id_categoria_gasto: number;
}
