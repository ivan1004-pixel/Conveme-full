import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('promociones')
@ObjectType()
export class Promocion {
  @PrimaryGeneratedColumn({ name: 'id_promocion' })
  @Field(() => Int)
  id_promocion: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  tipo_descuento: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  valor_descuento: number;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_inicio: Date;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_fin: Date;

  @Column({ default: true })
  @Field()
  activa: boolean;
}
