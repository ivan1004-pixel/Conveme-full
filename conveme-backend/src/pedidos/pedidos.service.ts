import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { UpdatePedidoInput } from './dto/update-pedido.input';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidosRepo: Repository<Pedido>,
  ) {}

  create(createInput: CreatePedidoInput): Promise<Pedido> {
    return this.pedidosRepo.save(this.pedidosRepo.create(createInput));
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidosRepo.find({ relations: ['cliente', 'vendedor'] });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidosRepo.findOne({
      where: { id_pedido: id },
      relations: ['cliente', 'vendedor']
    });
    if (!pedido) throw new NotFoundException(`Pedido #${id} no encontrado`);
    return pedido;
  }

  async update(id: number, updateInput: UpdatePedidoInput): Promise<Pedido> {
    const pedido = await this.pedidosRepo.preload(updateInput);
    if (!pedido) throw new NotFoundException(`Pedido #${id} no encontrado`);
    return this.pedidosRepo.save(pedido);
  }

  async remove(id: number): Promise<Pedido> {
    const pedido = await this.findOne(id);
    return this.pedidosRepo.remove(pedido);
  }
}
