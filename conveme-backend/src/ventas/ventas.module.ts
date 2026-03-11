import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasResolver } from './ventas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta])],
        providers: [VentasResolver, VentasService],
        exports: [VentasService],
})
export class VentasModule {}
