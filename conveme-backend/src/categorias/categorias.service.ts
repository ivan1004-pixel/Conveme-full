import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaInput } from './dto/create-categoria.input';
import { UpdateCategoriaInput } from './dto/update-categoria.input';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriasRepo: Repository<Categoria>,
  ) {}

  create(createCategoriaInput: CreateCategoriaInput): Promise<Categoria> {
    return this.categoriasRepo.save(this.categoriasRepo.create(createCategoriaInput));
  }

  findAll(): Promise<Categoria[]> {
    return this.categoriasRepo.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriasRepo.findOne({ where: { id_categoria: id } });
    if (!categoria) throw new NotFoundException(`Categoria #${id} no encontrada`);
    return categoria;
  }

  async update(id: number, updateCategoriaInput: UpdateCategoriaInput): Promise<Categoria> {
    const categoria = await this.categoriasRepo.preload(updateCategoriaInput);
    if (!categoria) throw new NotFoundException(`Categoria #${id} no encontrada`);
    return this.categoriasRepo.save(categoria);
  }

  async remove(id: number): Promise<Categoria> {
    const categoria = await this.findOne(id);
    return this.categoriasRepo.remove(categoria);
  }
}
