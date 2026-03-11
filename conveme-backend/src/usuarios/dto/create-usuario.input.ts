import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUsuarioInput {
  @Field()
  username: string;

  @Field()
  password_hash: string;

  @Field(() => Int, { nullable: true })
  rol_id?: number;
}
