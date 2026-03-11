import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Estado } from '../../estados/entities/estado.entity';

@Entity('municipios')
@ObjectType()
export class Municipio {
  @PrimaryGeneratedColumn({ name: 'id_municipio' })
  @Field(() => Int)
  id_municipio: number;

  @Column({ name: 'estado_id', nullable: true })
  @Field(() => Int, { nullable: true })
  estado_id: number;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: 'estado_id' })
  @Field(() => Estado, { nullable: true })
  estado: Estado;

  @Column()
  @Field()
  nombre: string;
}