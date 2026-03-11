import { Test, TestingModule } from '@nestjs/testing';
import { VendedoresResolver } from './vendedores.resolver';
import { VendedoresService } from './vendedores.service';

describe('VendedoresResolver', () => {
  let resolver: VendedoresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendedoresResolver, VendedoresService],
    }).compile();

    resolver = module.get<VendedoresResolver>(VendedoresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
