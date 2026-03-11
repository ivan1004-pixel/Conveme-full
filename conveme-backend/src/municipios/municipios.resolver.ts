import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MunicipiosService } from './municipios.service';
import { Municipio } from './entities/municipio.entity';
import { CreateMunicipioInput } from './dto/create-municipio.input';
import { UpdateMunicipioInput } from './dto/update-municipio.input';

@Resolver(() => Municipio)
export class MunicipiosResolver {
  constructor(private readonly municipiosService: MunicipiosService) {}

  @Mutation(() => Municipio)
  createMunicipio(@Args('createMunicipioInput') createMunicipioInput: CreateMunicipioInput) {
    return this.municipiosService.create(createMunicipioInput);
  }

  @Query(() => [Municipio], { name: 'municipios' })
  findAll() {
    return this.municipiosService.findAll();
  }

  @Query(() => Municipio, { name: 'municipio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.municipiosService.findOne(id);
  }

  @Mutation(() => Municipio)
  updateMunicipio(@Args('updateMunicipioInput') updateMunicipioInput: UpdateMunicipioInput) {
    return this.municipiosService.update(updateMunicipioInput.id_municipio, updateMunicipioInput);
  }

  @Mutation(() => Municipio)
  removeMunicipio(@Args('id', { type: () => Int }) id: number) {
    return this.municipiosService.remove(id);
  }
}