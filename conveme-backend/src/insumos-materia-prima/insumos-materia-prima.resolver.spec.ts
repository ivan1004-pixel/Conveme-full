import { Test, TestingModule } from '@nestjs/testing';
import { InsumosMateriaPrimaResolver } from './insumos-materia-prima.resolver';
import { InsumosMateriaPrimaService } from './insumos-materia-prima.service';

describe('InsumosMateriaPrimaResolver', () => {
  let resolver: InsumosMateriaPrimaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsumosMateriaPrimaResolver, InsumosMateriaPrimaService],
    }).compile();

    resolver = module.get<InsumosMateriaPrimaResolver>(InsumosMateriaPrimaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
