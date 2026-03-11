import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetCortesInventario } from './entities/det-cortes-inventario.entity';
import { CreateDetCortesInventarioInput } from './dto/create-det-cortes-inventario.input';
import { UpdateDetCortesInventarioInput } from './dto/update-det-cortes-inventario.input';

@Injectable()
export class DetCortesInventarioService {
  constructor(
    @InjectRepository(DetCortesInventario)
    private readonly detCortesRepo: Repository<DetCortesInventario>,
  ) {}

  async create(createInput: CreateDetCortesInventarioInput): Promise<DetCortesInventario> {
    const nuevoCorte = this.detCortesRepo.create(createInput);
    return this.detCortesRepo.save(nuevoCorte);
  }

  findAll(): Promise<DetCortesInventario[]> {
    return this.detCortesRepo.find({ relations: ['corte', 'producto'] });
  }

  async findOne(id: number): Promise<DetCortesInventario> {
    const detalle = await this.detCortesRepo.findOne({
      where: { id_det_corte: id },
      relations: ['corte', 'producto']
    });
    if (!detalle) throw new NotFoundException(`Detalle de corte #${id} no encontrado`);
    return detalle;
  }

  async update(id: number, updateInput: UpdateDetCortesInventarioInput): Promise<DetCortesInventario> {
    const detalle = await this.detCortesRepo.preload(updateInput);
    if (!detalle) throw new NotFoundException(`Detalle de corte #${id} no encontrado`);
    return this.detCortesRepo.save(detalle);
  }

  async remove(id: number): Promise<DetCortesInventario> {
    const detalle = await this.findOne(id);
    return this.detCortesRepo.remove(detalle);
  }
}
