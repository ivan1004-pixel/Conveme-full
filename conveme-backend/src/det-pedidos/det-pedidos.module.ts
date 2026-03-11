import { Module } from '@nestjs/common';
import { DetPedidosService } from './det-pedidos.service';
import { DetPedidosResolver } from './det-pedidos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetPedido } from './entities/det-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetPedido])],
        providers: [DetPedidosResolver, DetPedidosService],
        exports: [DetPedidosService],
})
export class DetPedidosModule {}
