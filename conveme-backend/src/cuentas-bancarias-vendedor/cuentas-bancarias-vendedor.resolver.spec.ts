import { Test, TestingModule } from '@nestjs/testing';
import { CuentasBancariasVendedorResolver } from './cuentas-bancarias-vendedor.resolver';
import { CuentasBancariasVendedorService } from './cuentas-bancarias-vendedor.service';

describe('CuentasBancariasVendedorResolver', () => {
  let resolver: CuentasBancariasVendedorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentasBancariasVendedorResolver, CuentasBancariasVendedorService],
    }).compile();

    resolver = module.get<CuentasBancariasVendedorResolver>(CuentasBancariasVendedorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
