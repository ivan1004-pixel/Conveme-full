import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './entities/estado.entity';
import { CreateEstadoInput } from './dto/create-estado.input';
import { UpdateEstadoInput } from './dto/update-estado.input';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(Estado)
    private readonly estadosRepository: Repository<Estado>,
  ) {}

  create(createEstadoInput: CreateEstadoInput): Promise<Estado> {
    const nuevoEstado = this.estadosRepository.create(createEstadoInput);
    return this.estadosRepository.save(nuevoEstado);
  }

  findAll(): Promise<Estado[]> {
    return this.estadosRepository.find({ relations: ['pais'] });
  }

  async findOne(id: number): Promise<Estado> {
    const estado = await this.estadosRepository.findOne({
      where: { id_estado: id },
      relations: ['pais'],
    });
    if (!estado) throw new NotFoundException(`Estado #${id} no encontrado`);
    return estado;
  }

async update(id: number, updateEstadoInput: UpdateEstadoInput): Promise<Estado> {
    const estado = await this.estadosRepository.preload(updateEstadoInput);
    if (!estado) throw new NotFoundException(`Estado #${id} no encontrado`);
    return this.estadosRepository.save(estado);
  }

  async remove(id: number): Promise<Estado> {
    const estado = await this.findOne(id);
    return this.estadosRepository.remove(estado);
  }
}