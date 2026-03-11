import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDetAsignacionInput {
  @Field(() => Int, { nullable: true })
  asignacion_id?: number;
  @Field(() => Int, { nullable: true })
  producto_id?: number;
  @Field(() => Int, { nullable: true })
  cantidad_entregada?: number;
}
