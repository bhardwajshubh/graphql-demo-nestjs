
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Teachers } from '../teachers/teacher.entity';


@Entity()
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn()
  subjectId : number

  @Column()
  subjectName : string

  @ManyToMany(type => Teachers , teacher => teacher.teaches , {cascade : true})
  teachers : Teachers[]

}