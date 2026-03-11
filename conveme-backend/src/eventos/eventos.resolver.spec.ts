import { Test, TestingModule } from '@nestjs/testing';
import { EventosResolver } from './eventos.resolver';
import { EventosService } from './eventos.service';

describe('EventosResolver', () => {
  let resolver: EventosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventosResolver, EventosService],
    }).compile();

    resolver = module.get<EventosResolver>(EventosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
