import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { Empleado } from '../../empleados/entities/empleado.entity';

@Entity('ordenes_produccion')
@ObjectType()
export class OrdenesProduccion {
  @PrimaryGeneratedColumn({ name: 'id_orden' })
  @Field(() => Int)
  id_orden: number;

  @Column({ name: 'producto_id', nullable: true })
  @Field(() => Int, { nullable: true })
  producto_id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  @Field(() => Producto, { nullable: true })
  producto: Producto;

  @Column({ name: 'empleado_id', nullable: true })
  @Field(() => Int, { nullable: true })
  empleado_id: number;

  @ManyToOne(() => Empleado)
  @JoinColumn({ name: 'empleado_id' })
  @Field(() => Empleado, { nullable: true })
  empleado: Empleado;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_produccion: Date;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  cantidad_fabricada: number;

  @Column({ default: 0 })
  @Field(() => Int)
  mermas_produccion: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @Field(() => Float)
  costo_operativo_lote: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  estado: string;
}
