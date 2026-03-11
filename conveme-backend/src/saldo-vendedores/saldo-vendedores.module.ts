import { Module } from '@nestjs/common';
import { SaldoVendedoresService } from './saldo-vendedores.service';
import { SaldoVendedoresResolver } from './saldo-vendedores.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaldoVendedor } from './entities/saldo-vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaldoVendedor])],
        providers: [SaldoVendedoresResolver, SaldoVendedoresService],
        exports: [SaldoVendedoresService],
})
export class SaldoVendedoresModule {}
