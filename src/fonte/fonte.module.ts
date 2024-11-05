import { Module } from '@nestjs/common';
import { FonteService } from './fonte.service';
import { FonteController } from './fonte.controller';

@Module({
  controllers: [FonteController],
  providers: [FonteService],
})
export class FonteModule {}
