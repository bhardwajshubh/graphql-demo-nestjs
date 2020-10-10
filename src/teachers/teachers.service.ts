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

  async getSubjects(teacher : TeachersType) : Promise<SubjectsType[]>{
    const x = await this.teachersRepository
      .createQueryBuilder('Teacher')
      // .where("Teacher.id = :id" , {"id" : teacher.id})
      .select(['subject'])
      .leftJoin('Teacher.teaches', 'subject')
      .getMany()
      // // .getQuery()
      // // const x = await  

    console.log(x)
    return x;
  }
}


