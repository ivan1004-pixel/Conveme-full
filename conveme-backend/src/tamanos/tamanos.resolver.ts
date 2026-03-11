import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TamanosService } from './tamanos.service';
import { Tamano } from './entities/tamano.entity';
import { CreateTamanoInput } from './dto/create-tamano.input';
import { UpdateTamanoInput } from './dto/update-tamano.input';

@Resolver(() => Tamano)
export class TamanosResolver {
  constructor(private readonly tamanosService: TamanosService) {}

  @Mutation(() => Tamano)
  createTamano(@Args('createTamanoInput') createTamanoInput: CreateTamanoInput) {
    return this.tamanosService.create(createTamanoInput);
  }

  @Query(() => [Tamano], { name: 'tamanos' })
  findAll() {
    return this.tamanosService.findAll();
  }

  @Query(() => Tamano, { name: 'tamano' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tamanosService.findOne(id);
  }

  @Mutation(() => Tamano)
  updateTamano(@Args('updateTamanoInput') updateTamanoInput: UpdateTamanoInput) {
    return this.tamanosService.update(updateTamanoInput.id_tamano, updateTamanoInput);
  }

  @Mutation(() => Tamano)
  removeTamano(@Args('id', { type: () => Int }) id: number) {
    return this.tamanosService.remove(id);
  }
}
