import { Test, TestingModule } from '@nestjs/testing';
import { PagosVendedoresResolver } from './pagos-vendedores.resolver';
import { PagosVendedoresService } from './pagos-vendedores.service';

describe('PagosVendedoresResolver', () => {
  let resolver: PagosVendedoresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagosVendedoresResolver, PagosVendedoresService],
    }).compile();

    resolver = module.get<PagosVendedoresResolver>(PagosVendedoresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
