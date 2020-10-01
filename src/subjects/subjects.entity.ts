import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Teachers } from '../teachers/teacher.entity';


@Entity()
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  name : string

}