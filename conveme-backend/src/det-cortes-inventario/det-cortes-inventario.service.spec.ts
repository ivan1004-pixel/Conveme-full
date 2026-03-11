import { Test, TestingModule } from '@nestjs/testing';
import { DetCortesInventarioService } from './det-cortes-inventario.service';

describe('DetCortesInventarioService', () => {
  let service: DetCortesInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetCortesInventarioService],
    }).compile();

    service = module.get<DetCortesInventarioService>(DetCortesInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
