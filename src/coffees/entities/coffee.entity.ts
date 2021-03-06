import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { type } from 'os';
import { Flavor } from './flavor.entity';

@Entity() // sql table will be coffee
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  qty: number;

  @Column()
  soldOut: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  launchDate: Date | null;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees,
    {
      cascade: true,
    },
  )
  flavors: Flavor[];
}
