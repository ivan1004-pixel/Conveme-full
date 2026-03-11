import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoriasGastoInput {
  @Field({ nullable: true })
  nombre?: string;
  @Field({ nullable: true })
  tipo?: string;
}
