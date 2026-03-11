import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosResolver } from './pedidos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
        providers: [PedidosResolver, PedidosService],
        exports: [PedidosService],
})
export class PedidosModule {}
