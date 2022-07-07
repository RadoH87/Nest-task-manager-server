import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    length: 255,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
