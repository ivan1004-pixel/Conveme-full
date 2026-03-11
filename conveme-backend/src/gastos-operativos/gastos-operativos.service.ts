import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GastosOperativo } from './entities/gastos-operativo.entity';
import { CreateGastosOperativoInput } from './dto/create-gastos-operativo.input';
import { UpdateGastosOperativoInput } from './dto/update-gastos-operativo.input';

@Injectable()
export class GastosOperativosService {
  constructor(@InjectRepository(GastosOperativo) private readonly gastosRepo: Repository<GastosOperativo>) {}

  async create(createInput: CreateGastosOperativoInput): Promise<GastosOperativo> {
    const nuevoGasto = this.gastosRepo.create(createInput);
    return this.gastosRepo.save(nuevoGasto);
  }

  findAll(): Promise<GastosOperativo[]> {
    return this.gastosRepo.find({ relations: ['categoria_gasto', 'empleado', 'vendedor', 'evento'] });
  }

  async findOne(id: number): Promise<GastosOperativo> {
    const gasto = await this.gastosRepo.findOne({
      where: { id_gasto: id },
      relations: ['categoria_gasto', 'empleado', 'vendedor', 'evento']
    });
    if (!gasto) throw new NotFoundException(`Gasto #${id} no encontrado`);
    return gasto;
  }

  async update(id: number, updateInput: UpdateGastosOperativoInput): Promise<GastosOperativo> {
    const gasto = await this.gastosRepo.preload(updateInput);
    if (!gasto) throw new NotFoundException(`Gasto #${id} no encontrado`);
    return this.gastosRepo.save(gasto);
  }

  async remove(id: number): Promise<GastosOperativo> {
    const gasto = await this.findOne(id);
    return this.gastosRepo.remove(gasto);
  }
}
