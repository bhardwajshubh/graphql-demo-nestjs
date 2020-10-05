import { EntityRepository,Repository } from 'typeorm';
import { Teachers } from './teacher.entity';

@EntityRepository(Teachers)
export class TeacherRepository extends Repository<Teachers> {

}