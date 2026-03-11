import { Test, TestingModule } from '@nestjs/testing';
import { InventarioNegocioService } from './inventario-negocio.service';

describe('InventarioNegocioService', () => {
  let service: InventarioNegocioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventarioNegocioService],
    }).compile();

    service = module.get<InventarioNegocioService>(InventarioNegocioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
