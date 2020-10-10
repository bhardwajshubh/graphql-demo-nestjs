import { Args, Resolver, Query, Mutation, ResolveField, Parent, ID, ResolveProperty } from '@nestjs/graphql';
import { TeachersType } from './teachers.type';
import { TeachersService } from './teachers.service';
import { CreateTeacherInput } from './create-teacher.input';
import { SubjectsType } from '../subjects/subjects.type';

@Resolver(of => TeachersType)
export class TeachersResolver {
  constructor(private teacherService : TeachersService) {
  }


  @Mutation(() => TeachersType)
  async createTeacher(
    @Args('createTeacherInput') createTeacherInput : CreateTeacherInput
  ) : Promise<TeachersType> {
    return this.teacherService.createTeacher(createTeacherInput);
  }

  @Query(() => [TeachersType])
  async Teachers() : Promise<TeachersType[]> {
    return this.teacherService.findAllTeachers();
  }

  @ResolveField("teaches" , () => [SubjectsType])
  async teaches(@Parent() teacher : TeachersType) : Promise<SubjectsType[]>{
    return this.teacherService.getSubjects(teacher);
  }


}
