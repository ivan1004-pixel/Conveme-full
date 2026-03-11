import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CreateEventoInput } from './dto/create-evento.input';
import { UpdateEventoInput } from './dto/update-evento.input';

@Injectable()
export class EventosService {
  constructor(@InjectRepository(Evento) private readonly eventosRepo: Repository<Evento>) {}

  create(createEventoInput: CreateEventoInput): Promise<Evento> {
    return this.eventosRepo.save(this.eventosRepo.create(createEventoInput));
  }

  findAll(): Promise<Evento[]> {
    return this.eventosRepo.find({ relations: ['escuela', 'municipio'] });
  }

  async findOne(id: number): Promise<Evento> {
    const evento = await this.eventosRepo.findOne({ where: { id_evento: id }, relations: ['escuela', 'municipio'] });
    if (!evento) throw new NotFoundException(`Evento #${id} no encontrado`);
    return evento;
  }

  async update(id: number, updateEventoInput: UpdateEventoInput): Promise<Evento> {
    const evento = await this.eventosRepo.preload(updateEventoInput);
    if (!evento) throw new NotFoundException(`Evento #${id} no encontrado`);
    return this.eventosRepo.save(evento);
  }

  async remove(id: number): Promise<Evento> {
    const evento = await this.findOne(id);
    return this.eventosRepo.remove(evento);
  }
}
