import { Module } from '@nestjs/common';
import { DetallesVentasService } from './detalles-ventas.service';
import { DetallesVentasResolver } from './detalles-ventas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallesVenta } from './entities/detalles-venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetallesVenta])],
        providers: [DetallesVentasResolver, DetallesVentasService],
        exports: [DetallesVentasService],
})
export class DetallesVentasModule {}
