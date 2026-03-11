import { Module } from '@nestjs/common';
import { AuditoriaSistemaService } from './auditoria-sistema.service';
import { AuditoriaSistemaResolver } from './auditoria-sistema.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditoriaSistema } from './entities/auditoria-sistema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditoriaSistema])],
        providers: [AuditoriaSistemaResolver, AuditoriaSistemaService],
        exports: [AuditoriaSistemaService],
})
export class AuditoriaSistemaModule {}
