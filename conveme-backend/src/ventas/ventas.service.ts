import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';
import { CreateVentaInput } from './dto/create-venta.input';
import { UpdateVentaInput } from './dto/update-venta.input';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventasRepo: Repository<Venta>,
  ) {}

  create(createInput: CreateVentaInput): Promise<Venta> {
    const nuevaVenta = this.ventasRepo.create(createInput);
    return this.ventasRepo.save(nuevaVenta);
  }

  findAll(): Promise<Venta[]> {
    return this.ventasRepo.find({ relations: ['vendedor', 'cliente', 'pedido', 'evento', 'promocion'] });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepo.findOne({
      where: { id_venta: id },
      relations: ['vendedor', 'cliente', 'pedido', 'evento', 'promocion']
    });
    if (!venta) throw new NotFoundException(`Venta #${id} no encontrada`);
    return venta;
  }

  async update(id: number, updateInput: UpdateVentaInput): Promise<Venta> {
    const venta = await this.ventasRepo.preload(updateInput);
    if (!venta) throw new NotFoundException(`Venta #${id} no encontrada`);
    return this.ventasRepo.save(venta);
  }

  async remove(id: number): Promise<Venta> {
    const venta = await this.findOne(id);
    return this.ventasRepo.remove(venta);
  }
}
