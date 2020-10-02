import { Args, Resolver, Query, Mutation, ResolveField, Parent, ID, ResolveProperty } from '@nestjs/graphql';
import { TeachersType } from './teachers.type';
import { TeachersService } from './teachers.service';
import { CreateTeacherInput } from './create-teacher.input';
import { SubjectsType } from '../subjects/subjects.type';

@Resolver(of => TeachersType)
export class TeachersResolver {
  constructor(private teacherService : TeachersService) {
  }


  @Mutation(returns => TeachersType)
  async createTeacher(
    @Args('createTeacherInput') createTeacherInput : CreateTeacherInput
  ) : Promise<TeachersType> {
    return this.teacherService.createTeacher(createTeacherInput);
  }

  @Query(returns => [TeachersType])
  async Teachers() : Promise<TeachersType[]> {
    return this.teacherService.findAllTeachers();
  }

  @ResolveField("teaches",returns => [SubjectsType])
  async getSubjectsForTeacher(@Parent() teacher : TeachersType) : Promise<SubjectsType[]>{
    return this.teacherService.getSubjects(teacher);
  }


}
