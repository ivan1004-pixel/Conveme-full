import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PromocionesService } from './promociones.service';
import { Promocion } from './entities/promocione.entity';
import { CreatePromocionInput } from './dto/create-promocione.input';
import { UpdatePromocionInput } from './dto/update-promocione.input';

@Resolver(() => Promocion)
export class PromocionesResolver {
  constructor(private readonly service: PromocionesService) {}

  @Mutation(() => Promocion)
  createPromocion(@Args('createPromocionInput') createInput: CreatePromocionInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Promocion], { name: 'promociones' })
  findAll() { return this.service.findAll(); }

  @Query(() => Promocion, { name: 'promocion' })
  findOne(@Args('id', { type: () => Int }) id: number) { return this.service.findOne(id); }

  @Mutation(() => Promocion)
  updatePromocion(@Args('updatePromocionInput') updateInput: UpdatePromocionInput) {
    return this.service.update(updateInput.id_promocion, updateInput);
  }

  @Mutation(() => Promocion)
  removePromocion(@Args('id', { type: () => Int }) id: number) { return this.service.remove(id); }
}
