import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriaSistemaService } from './auditoria-sistema.service';

describe('AuditoriaSistemaService', () => {
  let service: AuditoriaSistemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditoriaSistemaService],
    }).compile();

    service = module.get<AuditoriaSistemaService>(AuditoriaSistemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
