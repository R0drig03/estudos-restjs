import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { Repository } from 'typeorm';
import { StatusTarefa } from './tarefa.status.enum';

@Injectable()
export class TarefaService {
  constructor(
  @InjectRepository(Tarefa)
  private tarefaRepository: Repository<Tarefa>    
  ) {}

  async create(createTarefaDto: CreateTarefaDto) {
    const task = this.tarefaRepository.create(createTarefaDto);
    task.status = StatusTarefa.ATIVO;
    
    return await this.tarefaRepository.save(task);
  }

  findAll() {
    return `This action returns all tarefa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarefa`;
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
