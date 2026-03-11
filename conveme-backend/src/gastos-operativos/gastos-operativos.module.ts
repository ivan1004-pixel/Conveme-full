import { Module } from '@nestjs/common';
import { GastosOperativosService } from './gastos-operativos.service';
import { GastosOperativosResolver } from './gastos-operativos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastosOperativo } from './entities/gastos-operativo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GastosOperativo])],
        providers: [GastosOperativosResolver, GastosOperativosService],
        exports: [GastosOperativosService],
})
export class GastosOperativosModule {}
