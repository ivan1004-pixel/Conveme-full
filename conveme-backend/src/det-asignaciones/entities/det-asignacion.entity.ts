import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AsignacionesVendedor } from '../../asignaciones-vendedor/entities/asignaciones-vendedor.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('det_asignaciones')
@ObjectType()
export class DetAsignacion {
  @PrimaryGeneratedColumn({ name: 'id_det_asignacion' })
  @Field(() => Int)
  id_det_asignacion: number;

  @Column({ name: 'asignacion_id', nullable: true })
  @Field(() => Int, { nullable: true })
  asignacion_id: number;

  @ManyToOne(() => AsignacionesVendedor)
  @JoinColumn({ name: 'asignacion_id' })
  @Field(() => AsignacionesVendedor, { nullable: true })
  asignacion: AsignacionesVendedor;

  @Column({ name: 'producto_id', nullable: true })
  @Field(() => Int, { nullable: true })
  producto_id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  @Field(() => Producto, { nullable: true })
  producto: Producto;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  cantidad_entregada: number;
}
