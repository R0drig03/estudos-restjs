import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  create(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefaService.create(createTarefaDto);
  }

  @Get()
  findAll() {
    return this.tarefaService.findAll();
  }

  //puxar somente uma tarefa baseado no id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarefaService.findOne(+id); // --> O "+" CONVERTE A STRING PARA NUMBER
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
    return await this.tarefaService.update(+id, updateTarefaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarefaService.remove(+id);
  }
}
