import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PagosVendedoresService } from './pagos-vendedores.service';
import { PagosVendedor } from './entities/pagos-vendedor.entity';
import { CreatePagosVendedorInput } from './dto/create-pagos-vendedor.input';
import { UpdatePagosVendedorInput } from './dto/update-pagos-vendedor.input';

@Resolver(() => PagosVendedor)
export class PagosVendedoresResolver {
  constructor(private readonly service: PagosVendedoresService) {}

  @Mutation(() => PagosVendedor)
  createPagosVendedor(@Args('createPagosVendedorInput') createInput: CreatePagosVendedorInput) {
    return this.service.create(createInput);
  }

  @Query(() => [PagosVendedor], { name: 'pagosVendedoresList' })
  findAll() { return this.service.findAll(); }

  @Query(() => PagosVendedor, { name: 'pagoVendedor' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => PagosVendedor)
  updatePagosVendedor(@Args('updatePagosVendedorInput') updateInput: UpdatePagosVendedorInput) {
    return this.service.update(updateInput.id_pago, updateInput);
  }

  @Mutation(() => PagosVendedor)
  removePagosVendedor(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
