import { Module } from '@nestjs/common';
import { FonteService } from './fonte.service';
import { FonteController } from './fonte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/db/db.module';
import { Fonte } from './entities/fonte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fonte]), DatabaseModule],
  controllers: [FonteController],
  providers: [FonteService],
})
export class FonteModule {}
