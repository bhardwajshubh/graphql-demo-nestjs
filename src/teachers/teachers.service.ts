import { Injectable } from '@nestjs/common';
import { TeachersType } from './teachers.type';
import { TeacherRepository } from './teachers.repository';
import { CreateTeacherInput } from './create-teacher.input';

@Injectable()
export class TeachersService {
  /**
   * 
   * @param teachersRepository this will inject the teacher repository in this variable
   */
  constructor(private teachersRepository : TeacherRepository ) {
  }

  /**
   * the function is responsible to save the new teacher to the database
   * @param createTeacherInput the function will take a object parameter of Teacher type
   */
  async createTeacher(createTeacherInput : CreateTeacherInput) : Promise<TeachersType> {
    const teacher = this.teachersRepository.create(createTeacherInput);
    return teacher.save()
  }

  /**
   * this function will get all the teachers from the database an pass it 
   * to the teacher query resolver
   */
  async findAllTeachers() : Promise<TeachersType[]> {
    return this.teachersRepository.find();
  }

}


