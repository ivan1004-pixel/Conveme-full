import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComprasInsumo } from './entities/compras-insumo.entity';
import { CreateComprasInsumoInput } from './dto/create-compras-insumo.input';
import { UpdateComprasInsumoInput } from './dto/update-compras-insumo.input';

@Injectable()
export class ComprasInsumosService {
  constructor(@InjectRepository(ComprasInsumo) private readonly comprasRepo: Repository<ComprasInsumo>) {}

  create(createInput: CreateComprasInsumoInput): Promise<ComprasInsumo> {
    return this.comprasRepo.save(this.comprasRepo.create(createInput));
  }

  findAll(): Promise<ComprasInsumo[]> {
    return this.comprasRepo.find({ relations: ['empleado'] });
  }

  async findOne(id: number): Promise<ComprasInsumo> {
    const compra = await this.comprasRepo.findOne({ where: { id_compra_insumo: id }, relations: ['empleado'] });
    if (!compra) throw new NotFoundException(`Compra #${id} no encontrada`);
    return compra;
  }

  async update(id: number, updateInput: UpdateComprasInsumoInput): Promise<ComprasInsumo> {
    const compra = await this.comprasRepo.preload(updateInput);
    if (!compra) throw new NotFoundException(`Compra #${id} no encontrada`);
    return this.comprasRepo.save(compra);
  }

  async remove(id: number): Promise<ComprasInsumo> {
    const compra = await this.findOne(id);
    return this.comprasRepo.remove(compra);
  }
}
