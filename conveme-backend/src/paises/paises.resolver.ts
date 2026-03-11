import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaisesService } from './paises.service';
import { Pais } from './entities/paise.entity';
import { CreatePaisInput } from './dto/create-paise.input';
import { UpdatePaisInput } from './dto/update-paises.input';

@Resolver(() => Pais)
export class PaisesResolver {
  constructor(private readonly paisesService: PaisesService) {}

  @Mutation(() => Pais)
  createPaise(@Args('createPaisInput') createPaiseInput: CreatePaisInput) {
    return this.paisesService.create(createPaiseInput);
  }

  @Query(() => [Pais], { name: 'paises' })
  findAll() {
    return this.paisesService.findAll();
  }

  @Query(() => Pais, { name: 'paise' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paisesService.findOne(id);
  }

  @Mutation(() => Pais)
  updatePais(@Args('updatePaisInput') updatePaisInput: UpdatePaisInput) {
    return this.paisesService.update(updatePaisInput.id_pais, updatePaisInput);
  }

  @Mutation(() => Pais)
  removePaise(@Args('id', { type: () => Int }) id: number) {
    return this.paisesService.remove(id);
  }
}
