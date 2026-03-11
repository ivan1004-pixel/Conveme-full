import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumoInsumosProduccion } from './entities/consumo-insumos-produccion.entity';
import { CreateConsumoInsumosProduccionInput } from './dto/create-consumo-insumos-produccion.input';
import { UpdateConsumoInsumosProduccionInput } from './dto/update-consumo-insumos-produccion.input';

@Injectable()
export class ConsumoInsumosProduccionService {
  constructor(
    @InjectRepository(ConsumoInsumosProduccion)
    private readonly consumoRepo: Repository<ConsumoInsumosProduccion>,
  ) {}

  create(createInput: CreateConsumoInsumosProduccionInput): Promise<ConsumoInsumosProduccion> {
    return this.consumoRepo.save(this.consumoRepo.create(createInput));
  }

  findAll(): Promise<ConsumoInsumosProduccion[]> {
    return this.consumoRepo.find({ relations: ['orden_produccion', 'insumo'] });
  }

  async findOne(id: number): Promise<ConsumoInsumosProduccion> {
    const consumo = await this.consumoRepo.findOne({
      where: { id_consumo: id },
      relations: ['orden_produccion', 'insumo']
    });
    if (!consumo) throw new NotFoundException(`Consumo #${id} no encontrado`);
    return consumo;
  }

  async update(id: number, updateInput: UpdateConsumoInsumosProduccionInput): Promise<ConsumoInsumosProduccion> {
    const consumo = await this.consumoRepo.preload(updateInput);
    if (!consumo) throw new NotFoundException(`Consumo #${id} no encontrado`);
    return this.consumoRepo.save(consumo);
  }

  async remove(id: number): Promise<ConsumoInsumosProduccion> {
    const consumo = await this.findOne(id);
    return this.consumoRepo.remove(consumo);
  }
}
