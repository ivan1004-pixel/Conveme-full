import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePaisInput } from './create-paise.input';

@InputType()
export class UpdatePaisInput extends PartialType(CreatePaisInput) {
  id(id: any, updatePaiseInput: UpdatePaisInput) {
    throw new Error('Method not implemented.');
  }
  @Field(() => Int)
  id_pais: number;
}