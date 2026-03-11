import { Module } from '@nestjs/common';
import { CortesVendedorService } from './cortes-vendedor.service';
import { CortesVendedorResolver } from './cortes-vendedor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CortesVendedor } from './entities/cortes-vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CortesVendedor])],
        providers: [CortesVendedorResolver, CortesVendedorService],
        exports: [CortesVendedorService],
})
export class CortesVendedorModule {}
