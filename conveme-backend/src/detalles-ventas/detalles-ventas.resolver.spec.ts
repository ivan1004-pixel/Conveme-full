import { Test, TestingModule } from '@nestjs/testing';
import { DetallesVentasResolver } from './detalles-ventas.resolver';
import { DetallesVentasService } from './detalles-ventas.service';

describe('DetallesVentasResolver', () => {
  let resolver: DetallesVentasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallesVentasResolver, DetallesVentasService],
    }).compile();

    resolver = module.get<DetallesVentasResolver>(DetallesVentasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
