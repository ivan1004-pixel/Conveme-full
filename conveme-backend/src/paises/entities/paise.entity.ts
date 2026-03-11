import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paises')
@ObjectType()
export class Pais {
  @PrimaryGeneratedColumn({ name: 'id_pais' })
  @Field(() => Int)
  id_pais: number;

  @Column({ unique: true })
  @Field()
  nombre: string;
}