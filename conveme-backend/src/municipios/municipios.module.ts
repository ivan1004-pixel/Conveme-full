import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosResolver } from './municipios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipio } from './entities/municipio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Municipio])],
  providers: [MunicipiosResolver, MunicipiosService],
  exports: [MunicipiosService],
})
export class MunicipiosModule {}