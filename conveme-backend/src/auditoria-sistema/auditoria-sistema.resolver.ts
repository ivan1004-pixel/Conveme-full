import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuditoriaSistemaService } from './auditoria-sistema.service';
import { AuditoriaSistema } from './entities/auditoria-sistema.entity';
import { CreateAuditoriaSistemaInput } from './dto/create-auditoria-sistema.input';
import { UpdateAuditoriaSistemaInput } from './dto/update-auditoria-sistema.input';

@Resolver(() => AuditoriaSistema)
export class AuditoriaSistemaResolver {
  constructor(private readonly service: AuditoriaSistemaService) {}

  @Mutation(() => AuditoriaSistema)
  createAuditoriaSistema(@Args('createAuditoriaSistemaInput') createInput: CreateAuditoriaSistemaInput) {
    return this.service.create(createInput);
  }

  @Query(() => [AuditoriaSistema], { name: 'auditoriasSistema' })
  findAll() { return this.service.findAll(); }

  @Query(() => AuditoriaSistema, { name: 'auditoriaSistema' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => AuditoriaSistema)
  updateAuditoriaSistema(@Args('updateAuditoriaSistemaInput') updateInput: UpdateAuditoriaSistemaInput) {
    return this.service.update(updateInput.id_auditoria, updateInput);
  }

  @Mutation(() => AuditoriaSistema)
  removeAuditoriaSistema(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
