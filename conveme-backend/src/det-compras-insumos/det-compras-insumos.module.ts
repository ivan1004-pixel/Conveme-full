import { Module } from '@nestjs/common';
import { DetComprasInsumosService } from './det-compras-insumos.service';
import { DetComprasInsumosResolver } from './det-compras-insumos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetComprasInsumo } from './entities/det-compras-insumo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetComprasInsumo])],
        providers: [DetComprasInsumosResolver, DetComprasInsumosService],
        exports: [DetComprasInsumosService],
})
export class DetComprasInsumosModule {}
