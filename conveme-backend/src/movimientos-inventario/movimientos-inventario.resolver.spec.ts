import { Test, TestingModule } from '@nestjs/testing';
import { MovimientosInventarioResolver } from './movimientos-inventario.resolver';
import { MovimientosInventarioService } from './movimientos-inventario.service';

describe('MovimientosInventarioResolver', () => {
  let resolver: MovimientosInventarioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimientosInventarioResolver, MovimientosInventarioService],
    }).compile();

    resolver = module.get<MovimientosInventarioResolver>(MovimientosInventarioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
