import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Empleado } from '../../empleados/entities/empleado.entity';

@Entity('compras_insumos')
@ObjectType()
export class ComprasInsumo {
  @PrimaryGeneratedColumn({ name: 'id_compra_insumo' })
  @Field(() => Int)
  id_compra_insumo: number;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_compra: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  proveedor: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  monto_total: number;

  @Column({ name: 'empleado_id', nullable: true })
  @Field(() => Int, { nullable: true })
  empleado_id: number;

  @ManyToOne(() => Empleado)
  @JoinColumn({ name: 'empleado_id' })
  @Field(() => Empleado, { nullable: true })
  empleado: Empleado;

  @Column({ nullable: true })
  @Field({ nullable: true })
  comprobante_url: string;
}
