import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaldoVendedor } from './entities/saldo-vendedor.entity';
import { CreateSaldoVendedorInput } from './dto/create-saldo-vendedor.input';
import { UpdateSaldoVendedorInput } from './dto/update-saldo-vendedor.input';

@Injectable()
export class SaldoVendedoresService {
  constructor(@InjectRepository(SaldoVendedor) private readonly saldosRepo: Repository<SaldoVendedor>) {}

  async create(createInput: CreateSaldoVendedorInput): Promise<SaldoVendedor> {
    const nuevoSaldo = this.saldosRepo.create(createInput);
    return this.saldosRepo.save(nuevoSaldo);
  }

  findAll(): Promise<SaldoVendedor[]> {
    return this.saldosRepo.find({ relations: ['vendedor'] });
  }

  async findOne(id: number): Promise<SaldoVendedor> {
    const saldo = await this.saldosRepo.findOne({ where: { id_saldo: id }, relations: ['vendedor'] });
    if (!saldo) throw new NotFoundException(`Saldo #${id} no encontrado`);
    return saldo;
  }

  async update(id: number, updateInput: UpdateSaldoVendedorInput): Promise<SaldoVendedor> {
    const saldo = await this.saldosRepo.preload(updateInput);
    if (!saldo) throw new NotFoundException(`Saldo #${id} no encontrado`);
    return this.saldosRepo.save(saldo);
  }

  async remove(id: number): Promise<SaldoVendedor> {
    const saldo = await this.findOne(id);
    return this.saldosRepo.remove(saldo);
  }
}
