import { Injectable } from '@nestjs/common';
import { CreatePaisInput } from './dto/create-paise.input';
import { UpdatePaisInput } from './dto/update-paises.input';

@Injectable()
export class PaisesService {
  create(createPaiseInput: CreatePaisInput) {
    return 'This action adds a new paise';
  }

  findAll() {
    return `This action returns all paises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paise`;
  }

  update(id: number, updatePaiseInput: UpdatePaisInput) {
    return `This action updates a #${id} paise`;
  }

  remove(id: number) {
    return `This action removes a #${id} paise`;
  }
}
