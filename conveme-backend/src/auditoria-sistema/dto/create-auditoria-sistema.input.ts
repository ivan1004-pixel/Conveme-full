import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAuditoriaSistemaInput {
  @Field(() => Int, { nullable: true }) usuario_id?: number;
  @Field({ nullable: true }) accion?: string;
  @Field({ nullable: true }) tabla_afectada?: string;
}
