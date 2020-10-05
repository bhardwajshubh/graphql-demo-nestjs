import { Field, ID,  ObjectType , Int} from '@nestjs/graphql';


@ObjectType('Teacher')
export class TeachersType {
  @Field(type => ID)
  id : number

  @Field()
  name : string

  @Field(type => Int)
  age : number

  @Field()
  specialization : string

}