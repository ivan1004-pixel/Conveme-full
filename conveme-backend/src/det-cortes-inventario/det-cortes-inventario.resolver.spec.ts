import { Test, TestingModule } from '@nestjs/testing';
import { DetCortesInventarioResolver } from './det-cortes-inventario.resolver';
import { DetCortesInventarioService } from './det-cortes-inventario.service';

describe('DetCortesInventarioResolver', () => {
  let resolver: DetCortesInventarioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetCortesInventarioResolver, DetCortesInventarioService],
    }).compile();

    resolver = module.get<DetCortesInventarioResolver>(DetCortesInventarioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
