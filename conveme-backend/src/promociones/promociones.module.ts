import { Module } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { PromocionesResolver } from './promociones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promocion } from './entities/promocione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promocion])],
        providers: [PromocionesResolver, PromocionesService],
        exports: [PromocionesService],
})
export class PromocionesModule {}
