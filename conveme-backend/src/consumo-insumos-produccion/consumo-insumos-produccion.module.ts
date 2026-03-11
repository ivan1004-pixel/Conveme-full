import { Module } from '@nestjs/common';
import { ConsumoInsumosProduccionService } from './consumo-insumos-produccion.service';
import { ConsumoInsumosProduccionResolver } from './consumo-insumos-produccion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumoInsumosProduccion } from './entities/consumo-insumos-produccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumoInsumosProduccion])],
        providers: [ConsumoInsumosProduccionResolver, ConsumoInsumosProduccionService],
        exports: [ConsumoInsumosProduccionService],
})
export class ConsumoInsumosProduccionModule {}
