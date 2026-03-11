import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {
  @Field(() => Int, { nullable: true })
  usuario_id?: number;

  @Field({ nullable: true })
  nombre_completo?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  telefono?: string;

  @Field({ nullable: true })
  direccion_envio?: string;
}
