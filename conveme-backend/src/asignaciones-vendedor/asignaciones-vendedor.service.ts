import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignacionesVendedor } from './entities/asignaciones-vendedor.entity';
import { CreateAsignacionesVendedorInput } from './dto/create-asignaciones-vendedor.input';
import { UpdateAsignacionesVendedorInput } from './dto/update-asignaciones-vendedor.input';

@Injectable()
export class AsignacionesVendedorService {
  constructor(
    @InjectRepository(AsignacionesVendedor)
    private readonly asignacionesRepo: Repository<AsignacionesVendedor>,
  ) {}

  create(createInput: CreateAsignacionesVendedorInput): Promise<AsignacionesVendedor> {
    return this.asignacionesRepo.save(this.asignacionesRepo.create(createInput));
  }

  findAll(): Promise<AsignacionesVendedor[]> {
    return this.asignacionesRepo.find({ relations: ['vendedor', 'empleado'] });
  }

  async findOne(id: number): Promise<AsignacionesVendedor> {
    const asignacion = await this.asignacionesRepo.findOne({
      where: { id_asignacion: id },
      relations: ['vendedor', 'empleado']
    });
    if (!asignacion) throw new NotFoundException(`Asignación #${id} no encontrada`);
    return asignacion;
  }

  async update(id: number, updateInput: UpdateAsignacionesVendedorInput): Promise<AsignacionesVendedor> {
    const asignacion = await this.asignacionesRepo.preload(updateInput);
    if (!asignacion) throw new NotFoundException(`Asignación #${id} no encontrada`);
    return this.asignacionesRepo.save(asignacion);
  }

  async remove(id: number): Promise<AsignacionesVendedor> {
    const asignacion = await this.findOne(id);
    return this.asignacionesRepo.remove(asignacion);
  }
}
