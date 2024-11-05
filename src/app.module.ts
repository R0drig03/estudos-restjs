import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'
import { DatabaseModule } from './db/db.module';
import { FonteModule } from './fonte/fonte.module';
import { TarefaModule } from './tarefa/tarefa.module';

@Module({
  imports: [DatabaseModule, FonteModule, TarefaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
