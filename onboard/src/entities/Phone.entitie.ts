import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Room } from './Address.entitie';

@Entity('phones')
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  ddd: number;

  @Column({ type: 'numeric' })
  phone: number;

  @Column({ type: 'boolean' })
  default: boolean;

  @Column({ type: 'text' })
  idOnboard: string;

  // @ManyToOne(() => Room, (room) => room.videos)
  // @JoinColumn({ name: 'room_id' })
  // room: Room;
}
