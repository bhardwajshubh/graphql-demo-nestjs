import { Field, ID, ObjectType } from '@nestjs/graphql';


@ObjectType("subject")
export class SubjectsType{
  @Field(type => ID)
  subjectId : number

  @Field()
  subjectName : string
}