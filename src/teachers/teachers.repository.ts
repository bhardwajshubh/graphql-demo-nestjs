import { EntityRepository,Repository } from 'typeorm';
import { Teachers } from './teacher.entity';
import { CreateTeacherInput } from './create-teacher.input';
import { TeachersType } from './teachers.type';
import { SubjectsRepository } from '../subjects/subjects.repository';

@EntityRepository(Teachers)
export class TeacherRepository extends Repository<Teachers> {
  constructor(private subjectRepository : SubjectsRepository) {
    super();
  }
  async createTeacher(createTeacherInput : CreateTeacherInput) : Promise<TeachersType>{
    const {name , age , specialization , teaches } = createTeacherInput;
    const teacher = new Teachers();
    teacher.name = name;
    teacher.age= age;
    teacher.specialization = specialization;
    teacher.teaches = await this.subjectRepository.findByIds(teaches)
    console.log(teacher.teaches);
    return teacher.save();
  }
}