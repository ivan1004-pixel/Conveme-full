import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CuentasBancariasVendedorService } from './cuentas-bancarias-vendedor.service';
import { CuentasBancariasVendedor } from './entities/cuentas-bancarias-vendedor.entity';
import { CreateCuentasBancariasVendedorInput } from './dto/create-cuentas-bancarias-vendedor.input';
import { UpdateCuentasBancariasVendedorInput } from './dto/update-cuentas-bancarias-vendedor.input';

@Resolver(() => CuentasBancariasVendedor)
export class CuentasBancariasVendedorResolver {
  constructor(private readonly service: CuentasBancariasVendedorService) {}

  @Mutation(() => CuentasBancariasVendedor)
  createCuentasBancariasVendedor(@Args('createCuentasBancariasVendedorInput') createInput: CreateCuentasBancariasVendedorInput) {
    return this.service.create(createInput);
  }

  @Query(() => [CuentasBancariasVendedor], { name: 'cuentasBancariasVendedorList' })
  findAll() { return this.service.findAll(); }

  @Query(() => CuentasBancariasVendedor, { name: 'cuentaBancariaVendedor' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => CuentasBancariasVendedor)
  updateCuentasBancariasVendedor(@Args('updateCuentasBancariasVendedorInput') updateInput: UpdateCuentasBancariasVendedorInput) {
    return this.service.update(updateInput.id_cuenta, updateInput);
  }

  @Mutation(() => CuentasBancariasVendedor)
  removeCuentasBancariasVendedor(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
