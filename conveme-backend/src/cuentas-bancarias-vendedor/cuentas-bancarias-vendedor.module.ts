import { Module } from '@nestjs/common';
import { CuentasBancariasVendedorService } from './cuentas-bancarias-vendedor.service';
import { CuentasBancariasVendedorResolver } from './cuentas-bancarias-vendedor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasBancariasVendedor } from './entities/cuentas-bancarias-vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentasBancariasVendedor])],
        providers: [CuentasBancariasVendedorResolver, CuentasBancariasVendedorService],
        exports: [CuentasBancariasVendedorService],
})
export class CuentasBancariasVendedorModule {}
