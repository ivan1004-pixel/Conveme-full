import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './entities/municipio.entity';
import { CreateMunicipioInput } from './dto/create-municipio.input';
import { UpdateMunicipioInput } from './dto/update-municipio.input';

@Injectable()
export class MunicipiosService {
  constructor(
    @InjectRepository(Municipio)
    private readonly municipiosRepository: Repository<Municipio>,
  ) {}

  create(createMunicipioInput: CreateMunicipioInput): Promise<Municipio> {
    const nuevoMunicipio = this.municipiosRepository.create(createMunicipioInput);
    return this.municipiosRepository.save(nuevoMunicipio);
  }

  findAll(): Promise<Municipio[]> {
    return this.municipiosRepository.find({ relations: ['estado'] });
  }

  async findOne(id: number): Promise<Municipio> {
    const municipio = await this.municipiosRepository.findOne({
      where: { id_municipio: id },
      relations: ['estado'],
    });
    if (!municipio) throw new NotFoundException(`Municipio #${id} no encontrado`);
    return municipio;
  }

async update(id: number, updateMunicipioInput: UpdateMunicipioInput): Promise<Municipio> {
    const municipio = await this.municipiosRepository.preload(updateMunicipioInput);
    if (!municipio) throw new NotFoundException(`Municipio #${id} no encontrado`);
    return this.municipiosRepository.save(municipio);
  }

  async remove(id: number): Promise<Municipio> {
    const municipio = await this.findOne(id);
    return this.municipiosRepository.remove(municipio);
  }
}