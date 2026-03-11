import { Test, TestingModule } from '@nestjs/testing';
import { DetPedidosResolver } from './det-pedidos.resolver';
import { DetPedidosService } from './det-pedidos.service';

describe('DetPedidosResolver', () => {
  let resolver: DetPedidosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetPedidosResolver, DetPedidosService],
    }).compile();

    resolver = module.get<DetPedidosResolver>(DetPedidosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
