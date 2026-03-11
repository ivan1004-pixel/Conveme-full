import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productosRepo: Repository<Producto>,
  ) {}

  create(createProductoInput: CreateProductoInput): Promise<Producto> {
    return this.productosRepo.save(this.productosRepo.create(createProductoInput));
  }

  findAll(): Promise<Producto[]> {
    return this.productosRepo.find({ relations: ['categoria', 'tamano'] });
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productosRepo.findOne({
      where: { id_producto: id },
      relations: ['categoria', 'tamano']
    });
    if (!producto) throw new NotFoundException(`Producto #${id} no encontrado`);
    return producto;
  }

  async update(id: number, updateProductoInput: UpdateProductoInput): Promise<Producto> {
    const producto = await this.productosRepo.preload(updateProductoInput);
    if (!producto) throw new NotFoundException(`Producto #${id} no encontrado`);
    return this.productosRepo.save(producto);
  }

  async remove(id: number): Promise<Producto> {
    const producto = await this.findOne(id);
    return this.productosRepo.remove(producto);
  }
}
