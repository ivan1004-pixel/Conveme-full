import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuentasBancariasVendedor } from './entities/cuentas-bancarias-vendedor.entity';
import { CreateCuentasBancariasVendedorInput } from './dto/create-cuentas-bancarias-vendedor.input';
import { UpdateCuentasBancariasVendedorInput } from './dto/update-cuentas-bancarias-vendedor.input';

@Injectable()
export class CuentasBancariasVendedorService {
  constructor(
    @InjectRepository(CuentasBancariasVendedor)
    private readonly cuentasRepo: Repository<CuentasBancariasVendedor>,
  ) {}

  async create(createInput: CreateCuentasBancariasVendedorInput): Promise<CuentasBancariasVendedor> {
    const nuevaCuenta = this.cuentasRepo.create(createInput);
    return this.cuentasRepo.save(nuevaCuenta);
  }

  findAll(): Promise<CuentasBancariasVendedor[]> {
    return this.cuentasRepo.find({ relations: ['vendedor'] });
  }

  async findOne(id: number): Promise<CuentasBancariasVendedor> {
    const cuenta = await this.cuentasRepo.findOne({
      where: { id_cuenta: id },
      relations: ['vendedor']
    });
    if (!cuenta) throw new NotFoundException(`Cuenta #${id} no encontrada`);
    return cuenta;
  }

  async update(id: number, updateInput: UpdateCuentasBancariasVendedorInput): Promise<CuentasBancariasVendedor> {
    const cuenta = await this.cuentasRepo.preload(updateInput);
    if (!cuenta) throw new NotFoundException(`Cuenta #${id} no encontrada`);
    return this.cuentasRepo.save(cuenta);
  }

  async remove(id: number): Promise<CuentasBancariasVendedor> {
    const cuenta = await this.findOne(id);
    return this.cuentasRepo.remove(cuenta);
  }
}
