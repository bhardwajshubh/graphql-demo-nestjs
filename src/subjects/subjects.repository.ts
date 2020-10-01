import { EntityRepository, Repository } from 'typeorm';
import { Subject } from './subjects.entity';


@EntityRepository(Subject)
export class SubjectsRepository extends Repository<Subject> {

}