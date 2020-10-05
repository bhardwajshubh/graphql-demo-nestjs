import { Injectable } from '@nestjs/common';
import { TeachersType } from './teachers.type';
import { TeacherRepository } from './teachers.repository';
import { CreateTeacherInput } from './create-teacher.input';

@Injectable()
export class TeachersService {
  constructor(private teachersRepository : TeacherRepository ) {
  }

  async createTeacher(createTeacherInput : CreateTeacherInput) : Promise<TeachersType> {
    const teacher = this.teachersRepository.create(createTeacherInput);
    return teacher.save()
  }

  async findAllTeachers() : Promise<TeachersType[]> {
    return this.teachersRepository.find();
  }

}


