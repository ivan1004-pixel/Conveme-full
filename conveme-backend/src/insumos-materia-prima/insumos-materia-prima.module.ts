import { Module } from '@nestjs/common';
import { InsumosMateriaPrimaService } from './insumos-materia-prima.service';
import { InsumosMateriaPrimaResolver } from './insumos-materia-prima.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsumosMateriaPrima } from './entities/insumos-materia-prima.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InsumosMateriaPrima])],
        providers: [InsumosMateriaPrimaResolver, InsumosMateriaPrimaService],
        exports: [InsumosMateriaPrimaService],
})
export class InsumosMateriaPrimaModule {}
