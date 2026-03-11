import { Test, TestingModule } from '@nestjs/testing';
import { DetPedidosService } from './det-pedidos.service';

describe('DetPedidosService', () => {
  let service: DetPedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetPedidosService],
    }).compile();

    service = module.get<DetPedidosService>(DetPedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
