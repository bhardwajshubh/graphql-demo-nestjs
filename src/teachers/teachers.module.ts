import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersService } from './teachers.service';
import { TeachersResolver } from './teachers.resolver';
import { TeacherRepository } from './teachers.repository';


@Module({
  imports : [
  TypeOrmModule.forFeature([TeacherRepository]),

  ],
  providers: [TeachersService, TeachersResolver]
})
export class TeachersModule {}
