import { Test, TestingModule } from '@nestjs/testing';
import { CuentasBancariasVendedorService } from './cuentas-bancarias-vendedor.service';

describe('CuentasBancariasVendedorService', () => {
  let service: CuentasBancariasVendedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentasBancariasVendedorService],
    }).compile();

    service = module.get<CuentasBancariasVendedorService>(CuentasBancariasVendedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
