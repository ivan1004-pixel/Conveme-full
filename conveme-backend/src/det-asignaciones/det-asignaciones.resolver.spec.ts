import { Test, TestingModule } from '@nestjs/testing';
import { DetAsignacionesResolver } from './det-asignaciones.resolver';
import { DetAsignacionesService } from './det-asignaciones.service';

describe('DetAsignacionesResolver', () => {
  let resolver: DetAsignacionesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetAsignacionesResolver, DetAsignacionesService],
    }).compile();

    resolver = module.get<DetAsignacionesResolver>(DetAsignacionesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
