import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateConsumoInsumosProduccionInput } from './create-consumo-insumos-produccion.input';

@InputType()
export class UpdateConsumoInsumosProduccionInput extends PartialType(CreateConsumoInsumosProduccionInput) {
  @Field(() => Int) id_consumo: number;
}
