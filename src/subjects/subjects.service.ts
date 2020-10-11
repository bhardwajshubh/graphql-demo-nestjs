import { Injectable } from '@nestjs/common';
import { SubjectsRepository } from './subjects.repository';
import { CreateSubjectInput } from './create-subject.input';
import { SubjectsType } from './subjects.type';

@Injectable()
export class SubjectsService {
  constructor(private subjectRepository : SubjectsRepository) {
  }

  async getAllSubjects() : Promise<SubjectsType[]>{
    return this.subjectRepository.find();
  }

  async createSubject(createSubjectInput : CreateSubjectInput) : Promise<SubjectsType>{
    const {subjectName} = createSubjectInput;
    const subject = this.subjectRepository.create({subjectName});
    return subject.save();
  }
}
