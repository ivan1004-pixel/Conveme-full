import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEscuelaInput {
  @Field()
  nombre: string;

  @Field({ nullable: true })
  siglas?: string;

  @Field(() => Int)
  municipio_id: number;

  @Field({ nullable: true })
  activa?: boolean;

}