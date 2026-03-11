import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventosService } from './eventos.service';
import { Evento } from './entities/evento.entity';
import { CreateEventoInput } from './dto/create-evento.input';
import { UpdateEventoInput } from './dto/update-evento.input';

@Resolver(() => Evento)
export class EventosResolver {
  constructor(private readonly eventosService: EventosService) {}

  @Mutation(() => Evento)
  createEvento(@Args('createEventoInput') createEventoInput: CreateEventoInput) {
    return this.eventosService.create(createEventoInput);
  }

  @Query(() => [Evento], { name: 'eventos' })
  findAll() { return this.eventosService.findAll(); }

  @Query(() => Evento, { name: 'evento' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.eventosService.findOne(id); }

  @Mutation(() => Evento)
  updateEvento(@Args('updateEventoInput') updateEventoInput: UpdateEventoInput) {
    return this.eventosService.update(updateEventoInput.id_evento, updateEventoInput);
  }

  @Mutation(() => Evento)
  removeEvento(@Args('id', { type: () => Int }) id: number) { return this.eventosService.remove(id); }
}
