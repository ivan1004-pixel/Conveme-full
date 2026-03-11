import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetComprasInsumo } from './entities/det-compras-insumo.entity';
import { CreateDetComprasInsumoInput } from './dto/create-det-compras-insumo.input';
import { UpdateDetComprasInsumoInput } from './dto/update-det-compras-insumo.input';

@Injectable()
export class DetComprasInsumosService {
  constructor(@InjectRepository(DetComprasInsumo) private readonly detComprasRepo: Repository<DetComprasInsumo>) {}

  create(createInput: CreateDetComprasInsumoInput): Promise<DetComprasInsumo> {
    return this.detComprasRepo.save(this.detComprasRepo.create(createInput));
  }

  findAll(): Promise<DetComprasInsumo[]> {
    return this.detComprasRepo.find({ relations: ['compra_insumo', 'insumo'] });
  }

  async findOne(id: number): Promise<DetComprasInsumo> {
    const detalle = await this.detComprasRepo.findOne({ where: { id_det_compra: id }, relations: ['compra_insumo', 'insumo'] });
    if (!detalle) throw new NotFoundException(`Detalle #${id} no encontrado`);
    return detalle;
  }

  async update(id: number, updateInput: UpdateDetComprasInsumoInput): Promise<DetComprasInsumo> {
    const detalle = await this.detComprasRepo.preload(updateInput);
    if (!detalle) throw new NotFoundException(`Detalle #${id} no encontrado`);
    return this.detComprasRepo.save(detalle);
  }

  async remove(id: number): Promise<DetComprasInsumo> {
    const detalle = await this.findOne(id);
    return this.detComprasRepo.remove(detalle);
  }
}
