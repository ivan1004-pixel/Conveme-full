import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
  ) {}

  create(createRoleInput: CreateRoleInput): Promise<Role> {
    const newRole = this.rolesRepository.create(createRoleInput);
    return this.rolesRepository.save(newRole);
  }

  findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    const role = await this.rolesRepository.findOne({ where: { id_rol: id } });
    if (!role) throw new NotFoundException(`Role #${id} no encontrado`);
    return role;
  }

  async update(id: number, updateRoleInput: UpdateRoleInput): Promise<Role> {
    const role = await this.rolesRepository.preload(updateRoleInput);
    if (!role) throw new NotFoundException(`Role #${id} no encontrado`);
    return this.rolesRepository.save(role);
  }

  async remove(id: number): Promise<Role> {
    const role = await this.findOne(id);
    return this.rolesRepository.remove(role);
  }
}
