import { type } from 'os';
import { TeachersType } from 'src/teachers/teachers.type';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Teachers } from '../teachers/teacher.entity';


@Entity()
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  name : string

  @ManyToMany(type => Teachers , teacher => teacher.teaches , {cascade : true})
  teachers : Teachers[]

}