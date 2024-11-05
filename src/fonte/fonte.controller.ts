import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FonteService } from './fonte.service';
import { CreateFonteDto } from './dto/create-fonte.dto';
import { UpdateFonteDto } from './dto/update-fonte.dto';

@Controller('fonte')
export class FonteController {
  constructor(private readonly fonteService: FonteService) {}

  @Post()
  create(@Body() createFonteDto: CreateFonteDto) {
    return this.fonteService.create(createFonteDto);
  }

  @Get()
  findAll() {
    return this.fonteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fonteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFonteDto: UpdateFonteDto) {
    return this.fonteService.update(+id, updateFonteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fonteService.remove(+id);
  }
}
