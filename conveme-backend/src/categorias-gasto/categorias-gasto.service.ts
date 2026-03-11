import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriasGasto } from './entities/categorias-gasto.entity';
import { CreateCategoriasGastoInput } from './dto/create-categorias-gasto.input';
import { UpdateCategoriasGastoInput } from './dto/update-categorias-gasto.input';

@Injectable()
export class CategoriasGastoService {
  constructor(@InjectRepository(CategoriasGasto) private readonly categoriasGastoRepo: Repository<CategoriasGasto>) {}

  create(createInput: CreateCategoriasGastoInput): Promise<CategoriasGasto> {
    return this.categoriasGastoRepo.save(this.categoriasGastoRepo.create(createInput));
  }

  findAll(): Promise<CategoriasGasto[]> {
    return this.categoriasGastoRepo.find();
  }

  async findOne(id: number): Promise<CategoriasGasto> {
    const categoriaGasto = await this.categoriasGastoRepo.findOne({ where: { id_categoria_gasto: id } });
    if (!categoriaGasto) throw new NotFoundException(`Categoría Gasto #${id} no encontrada`);
    return categoriaGasto;
  }

  async update(id: number, updateInput: UpdateCategoriasGastoInput): Promise<CategoriasGasto> {
    const categoriaGasto = await this.categoriasGastoRepo.preload(updateInput);
    if (!categoriaGasto) throw new NotFoundException(`Categoría Gasto #${id} no encontrada`);
    return this.categoriasGastoRepo.save(categoriaGasto);
  }

  async remove(id: number): Promise<CategoriasGasto> {
    const categoriaGasto = await this.findOne(id);
    return this.categoriasGastoRepo.remove(categoriaGasto);
  }
}
