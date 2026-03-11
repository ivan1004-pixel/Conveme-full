import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosResolver } from './empleados.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
        providers: [EmpleadosResolver, EmpleadosService],
        exports: [EmpleadosService],
})
export class EmpleadosModule {}
