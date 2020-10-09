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
    const x = await this.teachersRepository.find({where : {"id" : teacher.id} , relations : ['teaches']})
      // .createQueryBuilder('Teacher')
      // .where("Teacher.id = :id" , {"id" : teacher.id})
      // .select(['subject.id'])
      // .leftJoin('Teacher.teaches', 'subject')
      // .getMany()
      // // .getQuery()
      // // const x = await  

    console.log(x)
    return x;
  }
}


