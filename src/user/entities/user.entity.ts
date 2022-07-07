import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../../task/entities/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  firstName: string;

  @Column({
    length: 255,
  })
  lastName: string;

  @Column({
    length: 2,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  // one user can have multiple tasks
  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
