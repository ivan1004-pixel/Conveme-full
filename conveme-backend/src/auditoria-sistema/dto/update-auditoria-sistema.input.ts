import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAuditoriaSistemaInput } from './create-auditoria-sistema.input';

@InputType()
export class UpdateAuditoriaSistemaInput extends PartialType(CreateAuditoriaSistemaInput) {
  @Field(() => Int)
  id_auditoria: number;
}
