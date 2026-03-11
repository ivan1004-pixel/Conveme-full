import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from './entities/vendedor.entity';
import { CreateVendedorInput } from './dto/create-vendedor.input';
import { UpdateVendedorInput } from './dto/update-vendedor.input';

@Injectable()
export class VendedoresService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly vendedoresRepository: Repository<Vendedor>,
  ) {}

  create(createVendedorInput: CreateVendedorInput): Promise<Vendedor> {
    const nuevo = this.vendedoresRepository.create(createVendedorInput);
    return this.vendedoresRepository.save(nuevo);
  }

  findAll(): Promise<Vendedor[]> {
    return this.vendedoresRepository.find({ relations: ['usuario', 'escuela', 'municipio'] });
  }

  async findOne(id: number): Promise<Vendedor> {
    const vendedor = await this.vendedoresRepository.findOne({
      where: { id_vendedor: id },
      relations: ['usuario', 'escuela', 'municipio'],
    });
    if (!vendedor) throw new NotFoundException(`Vendedor #${id} no encontrado`);
    return vendedor;
  }

  async update(id: number, updateVendedorInput: UpdateVendedorInput): Promise<Vendedor> {
    const vendedor = await this.vendedoresRepository.preload(updateVendedorInput);
    if (!vendedor) throw new NotFoundException(`Vendedor #${id} no encontrado`);
    return this.vendedoresRepository.save(vendedor);
  }

  async remove(id: number): Promise<Vendedor> {
    const vendedor = await this.findOne(id);
    return this.vendedoresRepository.remove(vendedor);
  }
}
