import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateOrdenesProduccionInput } from './create-ordenes-produccion.input';

@InputType()
export class UpdateOrdenesProduccionInput extends PartialType(CreateOrdenesProduccionInput) {
  @Field(() => Int) id_orden: number;
}
