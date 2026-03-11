import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsumosMateriaPrima } from './entities/insumos-materia-prima.entity';
import { CreateInsumosMateriaPrimaInput } from './dto/create-insumos-materia-prima.input';
import { UpdateInsumosMateriaPrimaInput } from './dto/update-insumos-materia-prima.input';

@Injectable()
export class InsumosMateriaPrimaService {
  constructor(@InjectRepository(InsumosMateriaPrima) private readonly insumosRepo: Repository<InsumosMateriaPrima>) {}

  create(createInput: CreateInsumosMateriaPrimaInput): Promise<InsumosMateriaPrima> {
    return this.insumosRepo.save(this.insumosRepo.create(createInput));
  }

  findAll(): Promise<InsumosMateriaPrima[]> {
    return this.insumosRepo.find();
  }

  async findOne(id: number): Promise<InsumosMateriaPrima> {
    const insumo = await this.insumosRepo.findOne({ where: { id_insumo: id } });
    if (!insumo) throw new NotFoundException(`Insumo #${id} no encontrado`);
    return insumo;
  }

  async update(id: number, updateInput: UpdateInsumosMateriaPrimaInput): Promise<InsumosMateriaPrima> {
    const insumo = await this.insumosRepo.preload(updateInput);
    if (!insumo) throw new NotFoundException(`Insumo #${id} no encontrado`);
    return this.insumosRepo.save(insumo);
  }

  async remove(id: number): Promise<InsumosMateriaPrima> {
    const insumo = await this.findOne(id);
    return this.insumosRepo.remove(insumo);
  }
}
