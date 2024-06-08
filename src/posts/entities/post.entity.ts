import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  _id: string;

  @Column({ type: 'varchar' })
  avatarUrl: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  uid: string;

  @Column({ type: 'varchar' })
  posts: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  createdAt: string;
}
