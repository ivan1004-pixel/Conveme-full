import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('insumos_materia_prima')
@ObjectType()
export class InsumosMateriaPrima {
  @PrimaryGeneratedColumn({ name: 'id_insumo' })
  @Field(() => Int)
  id_insumo: number;

  @Column({ unique: true })
  @Field()
  nombre: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  unidad_medida: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @Field(() => Float)
  stock_actual: number;

  @Column('decimal', { precision: 10, scale: 2, default: 5 })
  @Field(() => Float)
  stock_minimo_alerta: number;
}
