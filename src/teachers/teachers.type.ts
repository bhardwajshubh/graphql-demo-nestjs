import { Field, ID,  ObjectType , Int} from '@nestjs/graphql';
import { SubjectsType } from '../subjects/subjects.type';

@ObjectType('Teacher')
export class TeachersType {
  @Field(type => ID)
  teacherId : number

  @Field()
  teacherName : string

  @Field(type => Int)
  teacherAge : number

  @Field()
  teacherSpecialization : string

  @Field(type => [SubjectsType])
  teaches : SubjectsType[]
}