import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Subject } from './Company.entitie';
// import { Video } from './Individual.entitie';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  street: string;

  @Column({ type: 'text' })
  neighborhood: string;

  @Column({ type: 'text' })
  city: string;

  @Column({ type: 'text' })
  state: string;

  @Column({ type: 'text' })
  postalCode: string;

  @Column({ type: 'text' })
  country: string;

  @Column({ type: 'boolean' })
  default: boolean;

  @Column({ type: 'numeric' })
  idCustomer: number;

  // @OneToMany(() => Video, (video) => video.room)
  // videos: Video[];

  // @ManyToMany(() => Subject, (subject) => subject.rooms)
  // subjects: Subject[];
}
