import { Test, TestingModule } from '@nestjs/testing';
import { TamanosResolver } from './tamanos.resolver';
import { TamanosService } from './tamanos.service';

describe('TamanosResolver', () => {
  let resolver: TamanosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TamanosResolver, TamanosService],
    }).compile();

    resolver = module.get<TamanosResolver>(TamanosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
