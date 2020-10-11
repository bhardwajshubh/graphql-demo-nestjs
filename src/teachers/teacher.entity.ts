import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Subject } from '../subjects/subjects.entity';

@Entity('Teacher')
export class Teachers extends BaseEntity {
  @PrimaryGeneratedColumn()
  teacherId : number;

  @Column()
  teacherName : string;

  @Column()
  teacherAge : number;

  @Column()
  teacherSpecialization : string;

  @ManyToMany(type => Subject , subject => subject.teachers )
  @JoinTable()
  teaches : Subject[]
}