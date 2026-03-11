import { Test, TestingModule } from '@nestjs/testing';
import { InsumosMateriaPrimaService } from './insumos-materia-prima.service';

describe('InsumosMateriaPrimaService', () => {
  let service: InsumosMateriaPrimaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsumosMateriaPrimaService],
    }).compile();

    service = module.get<InsumosMateriaPrimaService>(InsumosMateriaPrimaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
