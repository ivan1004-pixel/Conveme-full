import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Escuela } from '../../escuelas/entities/escuela.entity';
import { Municipio } from '../../municipios/entities/municipio.entity';

@Entity('eventos')
@ObjectType()
export class Evento {
  @PrimaryGeneratedColumn({ name: 'id_evento' })
  @Field(() => Int)
  id_evento: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  descripcion: string;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_inicio: Date;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_fin: Date;

  @Column({ name: 'escuela_id', nullable: true })
  @Field(() => Int, { nullable: true })
  escuela_id: number;

  @ManyToOne(() => Escuela)
  @JoinColumn({ name: 'escuela_id' })
  @Field(() => Escuela, { nullable: true })
  escuela: Escuela;

  @Column({ name: 'municipio_id', nullable: true })
  @Field(() => Int, { nullable: true })
  municipio_id: number;

  @ManyToOne(() => Municipio)
  @JoinColumn({ name: 'municipio_id' })
  @Field(() => Municipio, { nullable: true })
  municipio: Municipio;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @Field(() => Float)
  costo_stand: number;

  @Column({ default: true })
  @Field()
  activo: boolean;
}
