import { PartialType } from '@nestjs/swagger';
import { CreateFonteDto } from './create-fonte.dto';

export class UpdateFonteDto extends PartialType(CreateFonteDto) {}
