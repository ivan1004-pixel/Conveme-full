import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientosInventario } from './entities/movimientos-inventario.entity';
import { CreateMovimientosInventarioInput } from './dto/create-movimientos-inventario.input';
import { UpdateMovimientosInventarioInput } from './dto/update-movimientos-inventario.input';

@Injectable()
export class MovimientosInventarioService {
  constructor(
    @InjectRepository(MovimientosInventario)
    private readonly movimientosRepo: Repository<MovimientosInventario>,
  ) {}

  create(createInput: CreateMovimientosInventarioInput): Promise<MovimientosInventario> {
    return this.movimientosRepo.save(this.movimientosRepo.create(createInput));
  }

  findAll(): Promise<MovimientosInventario[]> {
    return this.movimientosRepo.find({ relations: ['producto', 'usuario'] });
  }

  async findOne(id: number): Promise<MovimientosInventario> {
    const movimiento = await this.movimientosRepo.findOne({
      where: { id_movimiento: id },
      relations: ['producto', 'usuario']
    });
    if (!movimiento) throw new NotFoundException(`Movimiento #${id} no encontrado`);
    return movimiento;
  }

  async update(id: number, updateInput: UpdateMovimientosInventarioInput): Promise<MovimientosInventario> {
    const movimiento = await this.movimientosRepo.preload(updateInput);
    if (!movimiento) throw new NotFoundException(`Movimiento #${id} no encontrado`);
    return this.movimientosRepo.save(movimiento);
  }

  async remove(id: number): Promise<MovimientosInventario> {
    const movimiento = await this.findOne(id);
    return this.movimientosRepo.remove(movimiento);
  }
}
