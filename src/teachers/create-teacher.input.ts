import {  InputType, Field, Int} from '@nestjs/graphql';


@InputType()
export class CreateTeacherInput {
  @Field()
  name : string;

  @Field()
  age : number

  @Field()
  specialization : string

  @Field(() => [Int],{nullable : true})
  teaches? : Array<number> 
}