import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallesVenta } from './entities/detalles-venta.entity';
import { CreateDetallesVentaInput } from './dto/create-detalles-venta.input';
import { UpdateDetallesVentaInput } from './dto/update-detalles-venta.input';

@Injectable()
export class DetallesVentasService {
  constructor(
    @InjectRepository(DetallesVenta)
    private readonly detallesRepo: Repository<DetallesVenta>,
  ) {}

  async create(createInput: CreateDetallesVentaInput): Promise<DetallesVenta> {
    const nuevoDetalle = this.detallesRepo.create(createInput);
    return this.detallesRepo.save(nuevoDetalle);
  }

  findAll(): Promise<DetallesVenta[]> {
    return this.detallesRepo.find({ relations: ['venta', 'producto'] });
  }

  async findOne(id: number): Promise<DetallesVenta> {
    const detalle = await this.detallesRepo.findOne({
      where: { id_det_venta: id },
      relations: ['venta', 'producto']
    });
    if (!detalle) throw new NotFoundException(`Detalle de venta #${id} no encontrado`);
    return detalle;
  }

  async update(id: number, updateInput: UpdateDetallesVentaInput): Promise<DetallesVenta> {
    const detalle = await this.detallesRepo.preload(updateInput);
    if (!detalle) throw new NotFoundException(`Detalle de venta #${id} no encontrado`);
    return this.detallesRepo.save(detalle);
  }

  async remove(id: number): Promise<DetallesVenta> {
    const detalle = await this.findOne(id);
    return this.detallesRepo.remove(detalle);
  }
}
