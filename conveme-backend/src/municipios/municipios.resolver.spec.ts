import { Test, TestingModule } from '@nestjs/testing';
import { MunicipiosResolver } from './municipios.resolver';
import { MunicipiosService } from './municipios.service';

describe('MunicipiosResolver', () => {
  let resolver: MunicipiosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MunicipiosResolver, MunicipiosService],
    }).compile();

    resolver = module.get<MunicipiosResolver>(MunicipiosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
