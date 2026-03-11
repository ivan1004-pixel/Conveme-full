import { Test, TestingModule } from '@nestjs/testing';
import { DetComprasInsumosResolver } from './det-compras-insumos.resolver';
import { DetComprasInsumosService } from './det-compras-insumos.service';

describe('DetComprasInsumosResolver', () => {
  let resolver: DetComprasInsumosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetComprasInsumosResolver, DetComprasInsumosService],
    }).compile();

    resolver = module.get<DetComprasInsumosResolver>(DetComprasInsumosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
