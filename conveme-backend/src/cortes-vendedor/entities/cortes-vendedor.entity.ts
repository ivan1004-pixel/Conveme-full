import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';
import { AsignacionesVendedor } from '../../asignaciones-vendedor/entities/asignaciones-vendedor.entity';

@Entity('cortes_vendedor')
@ObjectType()
export class CortesVendedor {
  @PrimaryGeneratedColumn({ name: 'id_corte' })
  @Field(() => Int)
  id_corte: number;

  @Column({ name: 'vendedor_id', nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @ManyToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column({ name: 'asignacion_id', unique: true, nullable: true })
  @Field(() => Int, { nullable: true })
  asignacion_id: number;

  @OneToOne(() => AsignacionesVendedor)
  @JoinColumn({ name: 'asignacion_id' })
  @Field(() => AsignacionesVendedor, { nullable: true })
  asignacion: AsignacionesVendedor;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_corte: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  dinero_esperado: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  dinero_total_entregado: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  diferencia_corte: number;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  observaciones: string;
}
