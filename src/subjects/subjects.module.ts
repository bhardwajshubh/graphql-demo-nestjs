import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { SubjectsResolver } from './subjects.resolver';
import { SubjectsService } from './subjects.service';
import { SubjectsRepository } from './subjects.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([SubjectsRepository])
  ],
  providers: [SubjectsResolver, SubjectsService],
})
export class SubjectsModule {}
