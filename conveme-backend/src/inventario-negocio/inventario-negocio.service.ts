import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventarioNegocio } from './entities/inventario-negocio.entity';
import { CreateInventarioNegocioInput } from './dto/create-inventario-negocio.input';
import { UpdateInventarioNegocioInput } from './dto/update-inventario-negocio.input';

@Injectable()
export class InventarioNegocioService {
  constructor(
    @InjectRepository(InventarioNegocio)
    private readonly inventarioRepo: Repository<InventarioNegocio>,
  ) {}

  create(createInput: CreateInventarioNegocioInput): Promise<InventarioNegocio> {
    return this.inventarioRepo.save(this.inventarioRepo.create(createInput));
  }

  findAll(): Promise<InventarioNegocio[]> {
    return this.inventarioRepo.find({ relations: ['producto'] });
  }

  async findOne(id: number): Promise<InventarioNegocio> {
    const inventario = await this.inventarioRepo.findOne({
      where: { id_inventario: id },
      relations: ['producto'],
    });
    if (!inventario) throw new NotFoundException(`Inventario #${id} no encontrado`);
    return inventario;
  }

  async update(id: number, updateInput: UpdateInventarioNegocioInput): Promise<InventarioNegocio> {
    const inventario = await this.inventarioRepo.preload(updateInput);
    if (!inventario) throw new NotFoundException(`Inventario #${id} no encontrado`);
    return this.inventarioRepo.save(inventario);
  }

  async remove(id: number): Promise<InventarioNegocio> {
    const inventario = await this.findOne(id);
    return this.inventarioRepo.remove(inventario);
  }
}
