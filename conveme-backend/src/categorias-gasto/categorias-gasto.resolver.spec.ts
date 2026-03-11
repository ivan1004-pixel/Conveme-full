import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasGastoResolver } from './categorias-gasto.resolver';
import { CategoriasGastoService } from './categorias-gasto.service';

describe('CategoriasGastoResolver', () => {
  let resolver: CategoriasGastoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasGastoResolver, CategoriasGastoService],
    }).compile();

    resolver = module.get<CategoriasGastoResolver>(CategoriasGastoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
