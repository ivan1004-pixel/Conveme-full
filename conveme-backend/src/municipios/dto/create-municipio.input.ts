import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMunicipioInput {
  @Field(() => Int)
  estado_id: number;

  @Field()
  nombre: string;
}