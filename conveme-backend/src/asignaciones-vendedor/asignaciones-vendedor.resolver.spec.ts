import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionesVendedorResolver } from './asignaciones-vendedor.resolver';
import { AsignacionesVendedorService } from './asignaciones-vendedor.service';

describe('AsignacionesVendedorResolver', () => {
  let resolver: AsignacionesVendedorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionesVendedorResolver, AsignacionesVendedorService],
    }).compile();

    resolver = module.get<AsignacionesVendedorResolver>(AsignacionesVendedorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
