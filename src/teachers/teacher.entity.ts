import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';


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


}