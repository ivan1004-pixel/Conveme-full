import { Test, TestingModule } from '@nestjs/testing';
import { PromocionesResolver } from './promociones.resolver';
import { PromocionesService } from './promociones.service';

describe('PromocionesResolver', () => {
  let resolver: PromocionesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromocionesResolver, PromocionesService],
    }).compile();

    resolver = module.get<PromocionesResolver>(PromocionesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
