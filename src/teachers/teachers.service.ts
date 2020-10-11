import { Injectable } from '@nestjs/common';
import { TeachersType } from './teachers.type';
import { TeacherRepository } from './teachers.repository';
import { CreateTeacherInput } from './create-teacher.input';
import { SubjectsType } from '../subjects/subjects.type';
import { Teachers } from './teacher.entity';
import { Subject } from 'rxjs';

@Injectable()
export class TeachersService {
  constructor(private teachersRepository : TeacherRepository) {
  }

  async createTeacher(createTeacherInput : CreateTeacherInput) : Promise<TeachersType> {
    return this.teachersRepository.createTeacher(createTeacherInput)
  }

  async findAllTeachers() : Promise<TeachersType[]> {
    return this.teachersRepository.find();
  }

  async getSubjects(teacher : TeachersType) : Promise<any>{
    const x = await this.teachersRepository.findOne({ where: { 'teacherId': teacher.teacherId }, relations: ['teaches'] })
      return x.teaches
  }
}


