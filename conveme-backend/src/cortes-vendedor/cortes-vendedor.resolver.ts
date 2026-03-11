import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CortesVendedorService } from './cortes-vendedor.service';
import { CortesVendedor } from './entities/cortes-vendedor.entity';
import { CreateCortesVendedorInput } from './dto/create-cortes-vendedor.input';
import { UpdateCortesVendedorInput } from './dto/update-cortes-vendedor.input';

@Resolver(() => CortesVendedor)
export class CortesVendedorResolver {
  constructor(private readonly service: CortesVendedorService) {}

  @Mutation(() => CortesVendedor)
  createCortesVendedor(@Args('createCortesVendedorInput') createInput: CreateCortesVendedorInput) {
    return this.service.create(createInput);
  }

  @Query(() => [CortesVendedor], { name: 'cortesVendedorList' })
  findAll() { return this.service.findAll(); }

  @Query(() => CortesVendedor, { name: 'cortesVendedor' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => CortesVendedor)
  updateCortesVendedor(@Args('updateCortesVendedorInput') updateInput: UpdateCortesVendedorInput) {
    return this.service.update(updateInput.id_corte, updateInput);
  }

  @Mutation(() => CortesVendedor)
  removeCortesVendedor(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
