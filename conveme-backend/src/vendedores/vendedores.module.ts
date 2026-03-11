import { Module } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { VendedoresResolver } from './vendedores.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendedor } from './entities/vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])], // <-- Esta es la línea que resuelve el error
        providers: [VendedoresResolver, VendedoresService],
        exports: [VendedoresService],
})
export class VendedoresModule {}
