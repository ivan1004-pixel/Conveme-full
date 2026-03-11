import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SaldoVendedoresService } from './saldo-vendedores.service';
import { SaldoVendedor } from './entities/saldo-vendedor.entity';
import { CreateSaldoVendedorInput } from './dto/create-saldo-vendedor.input';
import { UpdateSaldoVendedorInput } from './dto/update-saldo-vendedor.input';

@Resolver(() => SaldoVendedor)
export class SaldoVendedoresResolver {
  constructor(private readonly service: SaldoVendedoresService) {}

  @Mutation(() => SaldoVendedor)
  createSaldoVendedor(@Args('createSaldoVendedorInput') createInput: CreateSaldoVendedorInput) {
    return this.service.create(createInput);
  }

  @Query(() => [SaldoVendedor], { name: 'saldoVendedoresList' })
  findAll() { return this.service.findAll(); }

  @Query(() => SaldoVendedor, { name: 'saldoVendedor' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => SaldoVendedor)
  updateSaldoVendedor(@Args('updateSaldoVendedorInput') updateInput: UpdateSaldoVendedorInput) {
    return this.service.update(updateInput.id_saldo, updateInput);
  }

  @Mutation(() => SaldoVendedor)
  removeSaldoVendedor(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
