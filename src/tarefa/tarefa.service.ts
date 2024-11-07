import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { Repository } from 'typeorm';
import { StatusTarefa } from './tarefa.status.enum';

interface Dictionary {
  [key: string]: any;
}

@Injectable()
export class TarefaService {
  constructor(
  @InjectRepository(Tarefa)
  private tarefaRepository: Repository<Tarefa>,
  ) {}

  //ADCIONANDO UMA NOVA TAREFA NO BANCO
  async create(createTarefaDto: CreateTarefaDto) {
    const task = this.tarefaRepository.create(createTarefaDto);
    task.status = StatusTarefa.ATIVO;
    
    return await this.tarefaRepository.save(task);
  }

  //PEGANDO TODOS AS TAREFAS DO BANCO
  async findAll(): Promise<Tarefa[]> {
    return this.tarefaRepository.find();
  }

  //PEGANDO UMA UNICA TAREFA DO BANCO
  async findOne(id: number) {
    const retorno_bd = await this.tarefaRepository.findOne({ where: { id } });
  
    if (retorno_bd) {
      return {'Return': retorno_bd};
    }
  
    throw new HttpException({'Return': 'Tarefa não encontrada'}, HttpStatus.NOT_FOUND);
  };

  //ATUALIZANDO AS TAREFAS DO BANCO
  async updateTask(id: number, updateTarefaDto: UpdateTarefaDto) {
    
    const DictionaryInput: Dictionary = {};

    for (const [key, value] of Object.entries(updateTarefaDto)) 
      if (value) {
        DictionaryInput[key] = value;
      }
    
    if (Object.keys(DictionaryInput).length === 0) {
      throw new HttpException({'Erro': "Nenhum campo informado."}, HttpStatus.NOT_FOUND);
    } else {
      await this.tarefaRepository.update(id, DictionaryInput);
      return {'Task Atualizada': DictionaryInput};
    }
  };

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    const task = await this.findOne(id)

    if (task) {
      const updateTask = await this.tarefaRepository.update(
        id,
        updateTarefaDto,
      )
      return {
        updateTask,
      }
    }

    throw new HttpException({'Erro': "Nenhum campo informado."}, HttpStatus.NOT_FOUND);

  }

  
  //REMOVENDO UMA TAREFA DO BANCO
  async remove(id_input: number) {
    
    //PROCURANDO SE EXISTE ALGUMA TAREFA COM AQUELE ID
    const retorno_bd = await this.tarefaRepository.findOneBy({
      id: id_input
    });

    if (!retorno_bd) {
      throw new HttpException({'Return': 'Tarefa não encontrada'}, HttpStatus.NOT_FOUND);
    } else {
      await this.tarefaRepository.remove(retorno_bd);
      return {'Task Delete': retorno_bd};
    }
  }

}
