import { Module } from '@nestjs/common';
import { DetCortesInventarioService } from './det-cortes-inventario.service';
import { DetCortesInventarioResolver } from './det-cortes-inventario.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetCortesInventario } from './entities/det-cortes-inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetCortesInventario])],
        providers: [DetCortesInventarioResolver, DetCortesInventarioService],
        exports: [DetCortesInventarioService],
})
export class DetCortesInventarioModule {}
