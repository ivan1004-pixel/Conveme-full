import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetAsignacion } from './entities/det-asignacion.entity';
import { CreateDetAsignacionInput } from './dto/create-det-asignacion.input';
import { UpdateDetAsignacionInput } from './dto/update-det-asignacion.input';

@Injectable()
export class DetAsignacionesService {
  constructor(
    @InjectRepository(DetAsignacion)
    private readonly detAsignacionesRepo: Repository<DetAsignacion>,
  ) {}

  async create(createInput: CreateDetAsignacionInput): Promise<DetAsignacion> {
    const nuevoDetalle = this.detAsignacionesRepo.create(createInput);
    return this.detAsignacionesRepo.save(nuevoDetalle);
  }

  findAll(): Promise<DetAsignacion[]> {
    return this.detAsignacionesRepo.find({ relations: ['asignacion', 'producto'] });
  }

  async findOne(id: number): Promise<DetAsignacion> {
    const detalle = await this.detAsignacionesRepo.findOne({
      where: { id_det_asignacion: id },
      relations: ['asignacion', 'producto']
    });
    if (!detalle) throw new NotFoundException(`Detalle de asignación #${id} no encontrado`);
    return detalle;
  }

  async update(id: number, updateInput: UpdateDetAsignacionInput): Promise<DetAsignacion> {
    const detalle = await this.detAsignacionesRepo.preload(updateInput);
    if (!detalle) throw new NotFoundException(`Detalle de asignación #${id} no encontrado`);
    return this.detAsignacionesRepo.save(detalle);
  }

  async remove(id: number): Promise<DetAsignacion> {
    const detalle = await this.findOne(id);
    return this.detAsignacionesRepo.remove(detalle);
  }
}
