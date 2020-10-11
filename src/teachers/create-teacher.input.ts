import {  InputType, Field, Int} from '@nestjs/graphql';


@InputType()
export class CreateTeacherInput {
  @Field()
  teacherName : string;

  @Field()
  teacherAge : number

  @Field()
  teacherSpecialization : string

  @Field(() => [Int],{nullable : true})
  teaches? : Array<number> 
}