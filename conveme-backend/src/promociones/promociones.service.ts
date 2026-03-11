import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promocion } from './entities/promocione.entity';
import { CreatePromocionInput } from './dto/create-promocione.input';
import { UpdatePromocionInput } from './dto/update-promocione.input';

@Injectable()
export class PromocionesService {
  constructor(@InjectRepository(Promocion) private readonly promocionesRepo: Repository<Promocion>) {}

  create(createInput: CreatePromocionInput): Promise<Promocion> {
    return this.promocionesRepo.save(this.promocionesRepo.create(createInput));
  }

  findAll(): Promise<Promocion[]> {
    return this.promocionesRepo.find();
  }

  async findOne(id: number): Promise<Promocion> {
    const promocion = await this.promocionesRepo.findOne({ where: { id_promocion: id } });
    if (!promocion) throw new NotFoundException(`Promoción #${id} no encontrada`);
    return promocion;
  }

  async update(id: number, updateInput: UpdatePromocionInput): Promise<Promocion> {
    const promocion = await this.promocionesRepo.preload(updateInput);
    if (!promocion) throw new NotFoundException(`Promoción #${id} no encontrada`);
    return this.promocionesRepo.save(promocion);
  }

  async remove(id: number): Promise<Promocion> {
    const promocion = await this.findOne(id);
    return this.promocionesRepo.remove(promocion);
  }
}
