import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosResolver } from './estados.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estado } from './entities/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  providers: [EstadosResolver, EstadosService],
  exports: [EstadosService],
})
export class EstadosModule {}