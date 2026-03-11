import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditoriaSistema } from './entities/auditoria-sistema.entity';
import { CreateAuditoriaSistemaInput } from './dto/create-auditoria-sistema.input';
import { UpdateAuditoriaSistemaInput } from './dto/update-auditoria-sistema.input';

@Injectable()
export class AuditoriaSistemaService {
  constructor(
    @InjectRepository(AuditoriaSistema)
    private readonly auditoriaRepo: Repository<AuditoriaSistema>,
  ) {}

  create(createInput: CreateAuditoriaSistemaInput): Promise<AuditoriaSistema> {
    return this.auditoriaRepo.save(this.auditoriaRepo.create(createInput));
  }

  findAll(): Promise<AuditoriaSistema[]> {
    return this.auditoriaRepo.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<AuditoriaSistema> {
    const auditoria = await this.auditoriaRepo.findOne({
      where: { id_auditoria: id },
      relations: ['usuario']
    });
    if (!auditoria) throw new NotFoundException(`Auditoría #${id} no encontrada`);
    return auditoria;
  }

  async update(id: number, updateInput: UpdateAuditoriaSistemaInput): Promise<AuditoriaSistema> {
    const auditoria = await this.auditoriaRepo.preload(updateInput);
    if (!auditoria) throw new NotFoundException(`Auditoría #${id} no encontrada`);
    return this.auditoriaRepo.save(auditoria);
  }

  async remove(id: number): Promise<AuditoriaSistema> {
    const auditoria = await this.findOne(id);
    return this.auditoriaRepo.remove(auditoria);
  }
}
