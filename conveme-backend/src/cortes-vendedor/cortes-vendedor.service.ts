import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CortesVendedor } from './entities/cortes-vendedor.entity';
import { CreateCortesVendedorInput } from './dto/create-cortes-vendedor.input';
import { UpdateCortesVendedorInput } from './dto/update-cortes-vendedor.input';

@Injectable()
export class CortesVendedorService {
  constructor(
    @InjectRepository(CortesVendedor)
    private readonly cortesRepo: Repository<CortesVendedor>,
  ) {}

  async create(createInput: CreateCortesVendedorInput): Promise<CortesVendedor> {
    const nuevoCorte = this.cortesRepo.create(createInput);
    return this.cortesRepo.save(nuevoCorte);
  }

  findAll(): Promise<CortesVendedor[]> {
    return this.cortesRepo.find({ relations: ['vendedor', 'asignacion'] });
  }

  async findOne(id: number): Promise<CortesVendedor> {
    const corte = await this.cortesRepo.findOne({
      where: { id_corte: id },
      relations: ['vendedor', 'asignacion']
    });
    if (!corte) throw new NotFoundException(`Corte #${id} no encontrado`);
    return corte;
  }

  async update(id: number, updateInput: UpdateCortesVendedorInput): Promise<CortesVendedor> {
    const corte = await this.cortesRepo.preload(updateInput);
    if (!corte) throw new NotFoundException(`Corte #${id} no encontrado`);
    return this.cortesRepo.save(corte);
  }

  async remove(id: number): Promise<CortesVendedor> {
    const corte = await this.findOne(id);
    return this.cortesRepo.remove(corte);
  }
}
