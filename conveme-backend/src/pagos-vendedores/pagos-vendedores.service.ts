import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PagosVendedor } from './entities/pagos-vendedor.entity';
import { CreatePagosVendedorInput } from './dto/create-pagos-vendedor.input';
import { UpdatePagosVendedorInput } from './dto/update-pagos-vendedor.input';

@Injectable()
export class PagosVendedoresService {
  constructor(@InjectRepository(PagosVendedor) private readonly pagosRepo: Repository<PagosVendedor>) {}

  async create(createInput: CreatePagosVendedorInput): Promise<PagosVendedor> {
    const nuevoPago = this.pagosRepo.create(createInput);
    return this.pagosRepo.save(nuevoPago);
  }

  findAll(): Promise<PagosVendedor[]> {
    return this.pagosRepo.find({ relations: ['vendedor', 'empleado', 'cuenta_destino'] });
  }

  async findOne(id: number): Promise<PagosVendedor> {
    const pago = await this.pagosRepo.findOne({
      where: { id_pago: id },
      relations: ['vendedor', 'empleado', 'cuenta_destino']
    });
    if (!pago) throw new NotFoundException(`Pago #${id} no encontrado`);
    return pago;
  }

  async update(id: number, updateInput: UpdatePagosVendedorInput): Promise<PagosVendedor> {
    const pago = await this.pagosRepo.preload(updateInput);
    if (!pago) throw new NotFoundException(`Pago #${id} no encontrado`);
    return this.pagosRepo.save(pago);
  }

  async remove(id: number): Promise<PagosVendedor> {
    const pago = await this.findOne(id);
    return this.pagosRepo.remove(pago);
  }
}
