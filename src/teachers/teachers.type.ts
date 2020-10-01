import { Field, ID,  ObjectType , Int} from '@nestjs/graphql';
import { SubjectsType } from '../subjects/subjects.type';

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

  @Field(type => [SubjectsType], {nullable : 'itemsAndList'})
  teaches? : SubjectsType[]
}