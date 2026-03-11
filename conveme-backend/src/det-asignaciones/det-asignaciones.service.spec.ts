import { Test, TestingModule } from '@nestjs/testing';
import { DetAsignacionesService } from './det-asignaciones.service';

describe('DetAsignacionesService', () => {
  let service: DetAsignacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetAsignacionesService],
    }).compile();

    service = module.get<DetAsignacionesService>(DetAsignacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
