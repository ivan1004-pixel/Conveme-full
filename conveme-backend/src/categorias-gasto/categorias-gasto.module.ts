import { Module } from '@nestjs/common';
import { CategoriasGastoService } from './categorias-gasto.service';
import { CategoriasGastoResolver } from './categorias-gasto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasGasto } from './entities/categorias-gasto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriasGasto])],
        providers: [CategoriasGastoResolver, CategoriasGastoService],
        exports: [CategoriasGastoService],
})
export class CategoriasGastoModule {}
