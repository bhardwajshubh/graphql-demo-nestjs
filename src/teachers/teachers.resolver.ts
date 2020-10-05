import { Args, Resolver, Query, Mutation} from '@nestjs/graphql';
import { TeachersType } from './teachers.type';
import { TeachersService } from './teachers.service';
import { CreateTeacherInput } from './create-teacher.input';

/**
 * Resolver is responsible to handle all the operation related to Teacher type
 */
@Resolver(of => TeachersType)
export class TeachersResolver {
  /**
   * 
   * @param teacherService This will instantiate the teacher service class which will be used in resolvers.
   */
  constructor(private teacherService : TeachersService) {
  }

  /**
   * 
   * The function is responsible to create and insert a new teacher in the database
   * 
   * @param createTeacherInput this defines the input type for the this function
   * @returns Promise<TeacherType>
   */
  @Mutation(returns => TeachersType)
  async createTeacher(
    @Args('createTeacherInput') createTeacherInput : CreateTeacherInput
  ) : Promise<TeachersType> {
    return this.teacherService.createTeacher(createTeacherInput);
  }

  /**
   * the function is responsible to to show all the teachers currently present in the database
   * @returns Promise<TeachersType[]> 
   */
  @Query(returns => [TeachersType])
  async Teachers() : Promise<TeachersType[]> {
    return this.teacherService.findAllTeachers();
  }



}
