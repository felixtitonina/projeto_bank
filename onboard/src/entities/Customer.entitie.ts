import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Room } from './Address.entitie';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  document: string;

  @Column({ type: 'text', nullable: true })
  businessName: string;

  @Column({ type: 'text', default: 'WAITING_DOCUMENT' })
  statusRegister: string;

  // @ManyToMany(() => Room, (room) => room.subjects)
  // @JoinTable({
  //   name: 'room_subject',
  //   joinColumn: {
  //     name: 'room_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'subject_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // rooms: Room[];
}
