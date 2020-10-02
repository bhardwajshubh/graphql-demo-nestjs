import { Injectable } from '@nestjs/common';
import { TeachersType } from './teachers.type';
import { Repository } from 'typeorm';
import {  Teachers } from './teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherRepository } from './teachers.repository';
import { CreateTeacherInput } from './create-teacher.input';
import { SubjectsRepository } from '../subjects/subjects.repository';
import { SubjectsService } from '../subjects/subjects.service';
import { SubjectsType } from '../subjects/subjects.type';
import { Parent, ResolveField } from '@nestjs/graphql';

@Injectable()
export class TeachersService {
  constructor(private teachersRepository : TeacherRepository, private subjectRepository : SubjectsRepository) {
  }

  async createTeacher(createTeacherInput : CreateTeacherInput) : Promise<TeachersType> {
    return this.teachersRepository.createTeacher(createTeacherInput)
  }

  async findAllTeachers() : Promise<TeachersType[]> {
    return this.teachersRepository.find();
  }


  async getSubjects(@Parent() teacher : TeachersType) : Promise<SubjectsType[]>{
    return this.teachersRepository.find({where : {id : teacher.id}, relations : ["teaches"]})
  }
}


