import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Escuela } from './entities/escuela.entity';
import { CreateEscuelaInput } from './dto/create-escuela.input';
import { UpdateEscuelaInput } from './dto/update-escuela.input';

@Injectable()
export class EscuelasService {
  constructor(
    @InjectRepository(Escuela)
    private readonly escuelasRepository: Repository<Escuela>,
  ) {}

  create(createEscuelaInput: CreateEscuelaInput): Promise<Escuela> {
    const nuevaEscuela = this.escuelasRepository.create(createEscuelaInput);
    return this.escuelasRepository.save(nuevaEscuela);
  }

  findAll(): Promise<Escuela[]> {
    return this.escuelasRepository.find({ relations: ['municipio'] });
  }

  async findOne(id: number): Promise<Escuela> {
    const escuela = await this.escuelasRepository.findOne({
      where: { id_escuela: id },
      relations: ['municipio'],
    });
    if (!escuela) throw new NotFoundException(`Escuela #${id} no encontrada`);
    return escuela;
  }

async update(id: number, updateEscuelaInput: UpdateEscuelaInput): Promise<Escuela> {
    // Solo pasamos el updateEscuelaInput directamente
    const escuela = await this.escuelasRepository.preload(updateEscuelaInput);
    if (!escuela) throw new NotFoundException(`Escuela #${id} no encontrada`);
    return this.escuelasRepository.save(escuela);
  }
  async remove(id: number): Promise<Escuela> {
    const escuela = await this.findOne(id);
    return this.escuelasRepository.remove(escuela);
  }
}