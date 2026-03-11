import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';
import { Empleado } from '../../empleados/entities/empleado.entity';

@Entity('asignaciones_vendedor')
@ObjectType()
export class AsignacionesVendedor {
  @PrimaryGeneratedColumn({ name: 'id_asignacion' })
  @Field(() => Int)
  id_asignacion: number;

  @Column({ name: 'vendedor_id', nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @ManyToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column({ name: 'empleado_id', nullable: true })
  @Field(() => Int, { nullable: true })
  empleado_id: number;

  @ManyToOne(() => Empleado)
  @JoinColumn({ name: 'empleado_id' })
  @Field(() => Empleado, { nullable: true })
  empleado: Empleado;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_asignacion: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  estado: string;
}
