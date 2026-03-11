import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasResolver } from './escuelas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './entities/escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Escuela])],
  providers: [EscuelasResolver, EscuelasService],
  exports: [EscuelasService],
})
export class EscuelasModule {}