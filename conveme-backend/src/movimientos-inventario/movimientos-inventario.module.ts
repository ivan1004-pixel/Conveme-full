import { Module } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientosInventarioResolver } from './movimientos-inventario.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientosInventario } from './entities/movimientos-inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientosInventario])],
        providers: [MovimientosInventarioResolver, MovimientosInventarioService],
        exports: [MovimientosInventarioService],
})
export class MovimientosInventarioModule {}
