import { Test, TestingModule } from '@nestjs/testing';
import { PaisesResolver } from './paises.resolver';
import { PaisesService } from './paises.service';

describe('PaisesResolver', () => {
  let resolver: PaisesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaisesResolver, PaisesService],
    }).compile();

    resolver = module.get<PaisesResolver>(PaisesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
