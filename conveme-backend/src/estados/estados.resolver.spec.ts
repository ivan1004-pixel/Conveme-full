import { Test, TestingModule } from '@nestjs/testing';
import { EstadosResolver } from './estados.resolver';
import { EstadosService } from './estados.service';

describe('EstadosResolver', () => {
  let resolver: EstadosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadosResolver, EstadosService],
    }).compile();

    resolver = module.get<EstadosResolver>(EstadosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
