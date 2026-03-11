import { Module } from '@nestjs/common';
import { InventarioNegocioService } from './inventario-negocio.service';
import { InventarioNegocioResolver } from './inventario-negocio.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioNegocio } from './entities/inventario-negocio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventarioNegocio])],
        providers: [InventarioNegocioResolver, InventarioNegocioService],
        exports: [InventarioNegocioService],
})
export class InventarioNegocioModule {}
