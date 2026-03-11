import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario> {
    const nuevoUsuario = this.usuariosRepository.create(createUsuarioInput);
    return this.usuariosRepository.save(nuevoUsuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find({ relations: ['rol'] });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOne({
      where: { id_usuario: id },
      relations: ['rol']
    });
    if (!usuario) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return usuario;
  }

  async update(id: number, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
    const usuario = await this.usuariosRepository.preload(updateUsuarioInput);
    if (!usuario) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return this.usuariosRepository.save(usuario);
  }

  async remove(id: number): Promise<Usuario> {
    const usuario = await this.findOne(id);
    return this.usuariosRepository.remove(usuario);
  }
}
