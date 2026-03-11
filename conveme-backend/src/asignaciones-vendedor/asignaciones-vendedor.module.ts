import { Module } from '@nestjs/common';
import { AsignacionesVendedorService } from './asignaciones-vendedor.service';
import { AsignacionesVendedorResolver } from './asignaciones-vendedor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionesVendedor } from './entities/asignaciones-vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignacionesVendedor])],
        providers: [AsignacionesVendedorResolver, AsignacionesVendedorService],
        exports: [AsignacionesVendedorService],
})


export class AsignacionesVendedorModule {}
