import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateEscuelaInput } from './create-escuela.input';

@InputType()
export class UpdateEscuelaInput extends PartialType(CreateEscuelaInput) {
  @Field(() => Int)
  id_escuela: number;
}