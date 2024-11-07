import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { DatabaseModule } from '../db/db.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa]), DatabaseModule],
  controllers: [TarefaController],
  providers: [TarefaService],
})
export class TarefaModule {}
