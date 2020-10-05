import { Args, Resolver, Query, Mutation} from '@nestjs/graphql';
import { TeachersType } from './teachers.type';
import { TeachersService } from './teachers.service';
import { CreateTeacherInput } from './create-teacher.input';


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



}
