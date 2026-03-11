import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetPedido } from './entities/det-pedido.entity';
import { CreateDetPedidoInput } from './dto/create-det-pedido.input';
import { UpdateDetPedidoInput } from './dto/update-det-pedido.input';

@Injectable()
export class DetPedidosService {
  constructor(
    @InjectRepository(DetPedido)
    private readonly detPedidosRepo: Repository<DetPedido>,
  ) {}

  create(createInput: CreateDetPedidoInput): Promise<DetPedido> {
    return this.detPedidosRepo.save(this.detPedidosRepo.create(createInput));
  }

  findAll(): Promise<DetPedido[]> {
    return this.detPedidosRepo.find({ relations: ['pedido', 'producto'] });
  }

  async findOne(id: number): Promise<DetPedido> {
    const detalle = await this.detPedidosRepo.findOne({
      where: { id_det_pedido: id },
      relations: ['pedido', 'producto']
    });
    if (!detalle) throw new NotFoundException(`Detalle de pedido #${id} no encontrado`);
    return detalle;
  }

  async update(id: number, updateInput: UpdateDetPedidoInput): Promise<DetPedido> {
    const detalle = await this.detPedidosRepo.preload(updateInput);
    if (!detalle) throw new NotFoundException(`Detalle de pedido #${id} no encontrado`);
    return this.detPedidosRepo.save(detalle);
  }

  async remove(id: number): Promise<DetPedido> {
    const detalle = await this.findOne(id);
    return this.detPedidosRepo.remove(detalle);
  }
}
