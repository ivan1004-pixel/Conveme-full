import { Test, TestingModule } from '@nestjs/testing';
import { ConsumoInsumosProduccionService } from './consumo-insumos-produccion.service';

describe('ConsumoInsumosProduccionService', () => {
  let service: ConsumoInsumosProduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumoInsumosProduccionService],
    }).compile();

    service = module.get<ConsumoInsumosProduccionService>(ConsumoInsumosProduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
