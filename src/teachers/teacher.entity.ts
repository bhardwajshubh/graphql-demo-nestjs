import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Subject } from '../subjects/subjects.entity';

@Entity('Teacher')
export class Teachers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  name : string;

  @Column()
  age : number;

  @Column()
  specialization : string;

  @ManyToMany(type => Subject , subject => subject.id , { cascade : true, eager : true })
  @JoinTable()
  teaches : Subject[]
}