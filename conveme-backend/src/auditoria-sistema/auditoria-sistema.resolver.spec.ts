import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriaSistemaResolver } from './auditoria-sistema.resolver';
import { AuditoriaSistemaService } from './auditoria-sistema.service';

describe('AuditoriaSistemaResolver', () => {
  let resolver: AuditoriaSistemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditoriaSistemaResolver, AuditoriaSistemaService],
    }).compile();

    resolver = module.get<AuditoriaSistemaResolver>(AuditoriaSistemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
