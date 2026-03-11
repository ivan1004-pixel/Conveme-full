import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tamaños')
@ObjectType()
export class Tamano {
  @PrimaryGeneratedColumn({ name: 'id_tamaño' })
  @Field(() => Int)
  id_tamano: number;

  @Column({ unique: true })
  @Field()
  descripcion: string;
}
