import { Module } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { PaisesResolver } from './paises.resolver';

@Module({
  providers: [PaisesResolver, PaisesService],
})
export class PaisesModule {}
