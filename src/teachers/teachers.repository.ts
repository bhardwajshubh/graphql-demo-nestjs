import { EntityRepository,Repository } from 'typeorm';
import { Teachers } from './teacher.entity';
import { CreateTeacherInput } from './create-teacher.input';
import { TeachersType } from './teachers.type';
import { Subject } from './../subjects/subjects.entity';

@EntityRepository(Teachers)
export class TeacherRepository extends Repository<Teachers> {
  async createTeacher(createTeacherInput : CreateTeacherInput) : Promise<TeachersType>{
    const {teaches, ...objectToSave } = createTeacherInput;
    const teacher = this.create(objectToSave);
    teacher.teaches = await Subject.findByIds(teaches)
    return teacher.save();
  }
}