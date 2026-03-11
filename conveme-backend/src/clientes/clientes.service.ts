import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
  ) {}

  create(createClienteInput: CreateClienteInput): Promise<Cliente> {
    const nuevo = this.clientesRepository.create(createClienteInput);
    return this.clientesRepository.save(nuevo);
  }

  findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clientesRepository.findOne({
      where: { id_cliente: id },
      relations: ['usuario'],
    });
    if (!cliente) throw new NotFoundException(`Cliente #${id} no encontrado`);
    return cliente;
  }

  async update(id: number, updateClienteInput: UpdateClienteInput): Promise<Cliente> {
    const cliente = await this.clientesRepository.preload(updateClienteInput);
    if (!cliente) throw new NotFoundException(`Cliente #${id} no encontrado`);
    return this.clientesRepository.save(cliente);
  }

  async remove(id: number): Promise<Cliente> {
    const cliente = await this.findOne(id);
    return this.clientesRepository.remove(cliente);
  }
}
