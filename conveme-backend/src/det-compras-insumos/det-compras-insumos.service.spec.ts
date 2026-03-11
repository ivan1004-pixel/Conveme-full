import { Test, TestingModule } from '@nestjs/testing';
import { DetComprasInsumosService } from './det-compras-insumos.service';

describe('DetComprasInsumosService', () => {
  let service: DetComprasInsumosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetComprasInsumosService],
    }).compile();

    service = module.get<DetComprasInsumosService>(DetComprasInsumosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
