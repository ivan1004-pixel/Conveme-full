import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from './entities/empleado.entity';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadosRepository: Repository<Empleado>,
  ) {}

  create(createEmpleadoInput: CreateEmpleadoInput): Promise<Empleado> {
    const nuevo = this.empleadosRepository.create(createEmpleadoInput);
    return this.empleadosRepository.save(nuevo);
  }

  findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find({ relations: ['usuario', 'municipio'] });
  }

  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadosRepository.findOne({
      where: { id_empleado: id },
      relations: ['usuario', 'municipio'],
    });
    if (!empleado) throw new NotFoundException(`Empleado #${id} no encontrado`);
    return empleado;
  }

  async update(id: number, updateEmpleadoInput: UpdateEmpleadoInput): Promise<Empleado> {
    const empleado = await this.empleadosRepository.preload(updateEmpleadoInput);
    if (!empleado) throw new NotFoundException(`Empleado #${id} no encontrado`);
    return this.empleadosRepository.save(empleado);
  }

  async remove(id: number): Promise<Empleado> {
    const empleado = await this.findOne(id);
    return this.empleadosRepository.remove(empleado);
  }
}
