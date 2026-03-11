import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';
import { Empleado } from '../../empleados/entities/empleado.entity';
import { CuentasBancariasVendedor } from '../../cuentas-bancarias-vendedor/entities/cuentas-bancarias-vendedor.entity';

@Entity('pagos_vendedores')
@ObjectType()
export class PagosVendedor {
  @PrimaryGeneratedColumn({ name: 'id_pago' })
  @Field(() => Int)
  id_pago: number;

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
  fecha_pago: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  monto_pagado: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  concepto_pago: string;

  @Column({ name: 'cuenta_destino_id', nullable: true })
  @Field(() => Int, { nullable: true })
  cuenta_destino_id: number;

  @ManyToOne(() => CuentasBancariasVendedor)
  @JoinColumn({ name: 'cuenta_destino_id' })
  @Field(() => CuentasBancariasVendedor, { nullable: true })
  cuenta_destino: CuentasBancariasVendedor;

  @Column({ nullable: true })
  @Field({ nullable: true })
  comprobante_url: string;
}
