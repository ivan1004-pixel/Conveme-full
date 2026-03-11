import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateInventarioNegocioInput } from './create-inventario-negocio.input';

@InputType()
export class UpdateInventarioNegocioInput extends PartialType(CreateInventarioNegocioInput) {
  @Field(() => Int)
  id_inventario: number;
}
