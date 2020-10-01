import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Subject } from './subjects.entity';
import { SubjectsService } from './subjects.service';
import { CreateSubjectInput } from './create-subject.input';
import { SubjectsType } from './subjects.type';


@Resolver(of => SubjectsType)
export class SubjectsResolver {
  constructor(private subjectService : SubjectsService) {
  }

  @Query(returns => [SubjectsType])
  async subjects() : Promise<SubjectsType[]>{
    return this.subjectService.getAllSubjects()
  }

  @Mutation(returns => SubjectsType)
  async createSubject(@Args("createSubjectInput") createSubjectInput : CreateSubjectInput) : Promise<SubjectsType>{
    return this.subjectService.createSubject(createSubjectInput);
  }

}
