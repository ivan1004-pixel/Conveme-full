import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field()
  nombre: string;

  @Field({ nullable: true })
  descripcion?: string;
}
