import { Test, TestingModule } from '@nestjs/testing';
import { EscuelasResolver } from './escuelas.resolver';
import { EscuelasService } from './escuelas.service';

describe('EscuelasResolver', () => {
  let resolver: EscuelasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscuelasResolver, EscuelasService],
    }).compile();

    resolver = module.get<EscuelasResolver>(EscuelasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
