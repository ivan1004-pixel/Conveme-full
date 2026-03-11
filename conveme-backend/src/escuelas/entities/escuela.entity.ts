import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Municipio } from '../../municipios/entities/municipio.entity';

@Entity('escuelas')
@ObjectType()
export class Escuela {
  @PrimaryGeneratedColumn({ name: 'id_escuela' })
  @Field(() => Int)
  id_escuela: number;

  @Column({ unique: true })
  @Field()
  nombre: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  siglas: string;

  @Column({ name: 'municipio_id', nullable: true })
  @Field(() => Int, { nullable: true })
  municipio_id: number;

  @ManyToOne(() => Municipio)
  @JoinColumn({ name: 'municipio_id' })
  @Field(() => Municipio, { nullable: true })
  municipio: Municipio;

  @Column({ default: true })
  @Field()
  activa: boolean;
}