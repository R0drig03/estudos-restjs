import { Injectable } from '@nestjs/common';
import { CreateFonteDto } from './dto/create-fonte.dto';
import { UpdateFonteDto } from './dto/update-fonte.dto';

@Injectable()
export class FonteService {
  create(createFonteDto: CreateFonteDto) {
    return 'This action adds a new fonte';
  }

  findAll() {
    return `This action returns all fonte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fonte`;
  }

  update(id: number, updateFonteDto: UpdateFonteDto) {
    return `This action updates a #${id} fonte`;
  }

  remove(id: number) {
    return `This action removes a #${id} fonte`;
  }
}
