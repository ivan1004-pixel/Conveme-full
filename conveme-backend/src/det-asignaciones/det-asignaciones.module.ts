import { Module } from '@nestjs/common';
import { DetAsignacionesService } from './det-asignaciones.service';
import { DetAsignacionesResolver } from './det-asignaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetAsignacion } from './entities/det-asignacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetAsignacion])],
        providers: [DetAsignacionesResolver, DetAsignacionesService],
        exports: [DetAsignacionesService],
})
export class DetAsignacionesModule {}
