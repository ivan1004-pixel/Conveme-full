import { Module } from '@nestjs/common';
import { OrdenesProduccionService } from './ordenes-produccion.service';
import { OrdenesProduccionResolver } from './ordenes-produccion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenesProduccion } from './entities/ordenes-produccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenesProduccion])],
        providers: [OrdenesProduccionResolver, OrdenesProduccionService],
        exports: [OrdenesProduccionService],
})
export class OrdenesProduccionModule {}
