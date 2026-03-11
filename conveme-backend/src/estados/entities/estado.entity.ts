import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pais } from '../../paises/entities/paise.entity'; // Asegúrate de tener la entidad Pais

@Entity('estados')
@ObjectType()
export class Estado {
  @PrimaryGeneratedColumn({ name: 'id_estado' })
  @Field(() => Int)
  id_estado: number;

  @Column({ name: 'pais_id', nullable: true })
  @Field(() => Int, { nullable: true })
  pais_id: number;

  @ManyToOne(() => Pais)
  @JoinColumn({ name: 'pais_id' })
  @Field(() => Pais, { nullable: true })
  pais: Pais;

  @Column()
  @Field()
  nombre: string;
}
