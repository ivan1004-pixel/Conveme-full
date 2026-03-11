import { Module } from '@nestjs/common';
import { ComprasInsumosService } from './compras-insumos.service';
import { ComprasInsumosResolver } from './compras-insumos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasInsumo } from './entities/compras-insumo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComprasInsumo])],
        providers: [ComprasInsumosResolver, ComprasInsumosService],
        exports: [ComprasInsumosService],
})
export class ComprasInsumosModule {}
