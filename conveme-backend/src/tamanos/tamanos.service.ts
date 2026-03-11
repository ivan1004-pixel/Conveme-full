import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tamano } from './entities/tamano.entity';
import { CreateTamanoInput } from './dto/create-tamano.input';
import { UpdateTamanoInput } from './dto/update-tamano.input';

@Injectable()
export class TamanosService {
  constructor(
    @InjectRepository(Tamano)
    private readonly tamanosRepo: Repository<Tamano>,
  ) {}

  create(createTamanoInput: CreateTamanoInput): Promise<Tamano> {
    return this.tamanosRepo.save(this.tamanosRepo.create(createTamanoInput));
  }

  findAll(): Promise<Tamano[]> {
    return this.tamanosRepo.find();
  }

  async findOne(id: number): Promise<Tamano> {
    const tamano = await this.tamanosRepo.findOne({ where: { id_tamano: id } });
    if (!tamano) throw new NotFoundException(`Tamaño #${id} no encontrado`);
    return tamano;
  }

  async update(id: number, updateTamanoInput: UpdateTamanoInput): Promise<Tamano> {
    const tamano = await this.tamanosRepo.preload(updateTamanoInput);
    if (!tamano) throw new NotFoundException(`Tamaño #${id} no encontrado`);
    return this.tamanosRepo.save(tamano);
  }

  async remove(id: number): Promise<Tamano> {
    const tamano = await this.findOne(id);
    return this.tamanosRepo.remove(tamano);
  }
}
