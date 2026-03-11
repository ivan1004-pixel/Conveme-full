import { Test, TestingModule } from '@nestjs/testing';
import { OrdenesProduccionResolver } from './ordenes-produccion.resolver';
import { OrdenesProduccionService } from './ordenes-produccion.service';

describe('OrdenesProduccionResolver', () => {
  let resolver: OrdenesProduccionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenesProduccionResolver, OrdenesProduccionService],
    }).compile();

    resolver = module.get<OrdenesProduccionResolver>(OrdenesProduccionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
