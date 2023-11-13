import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Subject } from './Company.entitie';
// import { Video } from './Individual.entitie';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  document: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'numeric' })
  idCustomer: number;

  @Column({ type: 'numeric', default: 0 })
  amount: number;

  @Column({ type: 'numeric', default: 0 })
  status: number;

  @Column({ type: 'numeric' })
  idProduct: number;

  @Column({ type: 'numeric', default: 1 })
  idChargeBasket: number;

  @Column({ type: 'text', default: null })
  idLogin: string;

  // @OneToMany(() => Video, (video) => video.room)
  // videos: Video[];

  // @ManyToMany(() => Subject, (subject) => subject.rooms)
  // subjects: Subject[];
}
