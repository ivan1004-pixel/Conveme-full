import { Module } from '@nestjs/common';
import { PagosVendedoresService } from './pagos-vendedores.service';
import { PagosVendedoresResolver } from './pagos-vendedores.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagosVendedor } from './entities/pagos-vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PagosVendedor])],
        providers: [PagosVendedoresResolver, PagosVendedoresService],
        exports: [PagosVendedoresService],
})
export class PagosVendedoresModule {}
