import {  InputType, Field} from '@nestjs/graphql';


@InputType()
export class CreateTeacherInput {
  @Field()
  name : string;

  @Field()
  age : number

  @Field()
  specialization : string

  @Field({nullable : true})
  teaches? : number[]
}