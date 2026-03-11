import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenesProduccion } from './entities/ordenes-produccion.entity';
import { CreateOrdenesProduccionInput } from './dto/create-ordenes-produccion.input';
import { UpdateOrdenesProduccionInput } from './dto/update-ordenes-produccion.input';

@Injectable()
export class OrdenesProduccionService {
  constructor(
    @InjectRepository(OrdenesProduccion)
    private readonly ordenesRepo: Repository<OrdenesProduccion>,
  ) {}

  create(createInput: CreateOrdenesProduccionInput): Promise<OrdenesProduccion> {
    return this.ordenesRepo.save(this.ordenesRepo.create(createInput));
  }

  findAll(): Promise<OrdenesProduccion[]> {
    return this.ordenesRepo.find({ relations: ['producto', 'empleado'] });
  }

  async findOne(id: number): Promise<OrdenesProduccion> {
    const orden = await this.ordenesRepo.findOne({
      where: { id_orden: id },
      relations: ['producto', 'empleado']
    });
    if (!orden) throw new NotFoundException(`Orden #${id} no encontrada`);
    return orden;
  }

  async update(id: number, updateInput: UpdateOrdenesProduccionInput): Promise<OrdenesProduccion> {
    const orden = await this.ordenesRepo.preload(updateInput);
    if (!orden) throw new NotFoundException(`Orden #${id} no encontrada`);
    return this.ordenesRepo.save(orden);
  }

  async remove(id: number): Promise<OrdenesProduccion> {
    const orden = await this.findOne(id);
    return this.ordenesRepo.remove(orden);
  }
}
