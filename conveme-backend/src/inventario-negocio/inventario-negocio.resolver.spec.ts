import { Test, TestingModule } from '@nestjs/testing';
import { InventarioNegocioResolver } from './inventario-negocio.resolver';
import { InventarioNegocioService } from './inventario-negocio.service';

describe('InventarioNegocioResolver', () => {
  let resolver: InventarioNegocioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventarioNegocioResolver, InventarioNegocioService],
    }).compile();

    resolver = module.get<InventarioNegocioResolver>(InventarioNegocioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
