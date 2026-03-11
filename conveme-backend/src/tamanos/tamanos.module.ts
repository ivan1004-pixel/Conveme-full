import { Module } from '@nestjs/common';
import { TamanosService } from './tamanos.service';
import { TamanosResolver } from './tamanos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tamano } from './entities/tamano.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tamano])],
        providers: [TamanosResolver, TamanosService],
        exports: [TamanosService],
})
export class TamanosModule {}
