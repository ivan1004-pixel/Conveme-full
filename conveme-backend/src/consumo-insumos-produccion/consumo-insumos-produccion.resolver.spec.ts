import { Test, TestingModule } from '@nestjs/testing';
import { ConsumoInsumosProduccionResolver } from './consumo-insumos-produccion.resolver';
import { ConsumoInsumosProduccionService } from './consumo-insumos-produccion.service';

describe('ConsumoInsumosProduccionResolver', () => {
  let resolver: ConsumoInsumosProduccionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumoInsumosProduccionResolver, ConsumoInsumosProduccionService],
    }).compile();

    resolver = module.get<ConsumoInsumosProduccionResolver>(ConsumoInsumosProduccionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
