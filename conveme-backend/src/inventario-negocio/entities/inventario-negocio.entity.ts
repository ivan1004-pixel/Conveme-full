import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('inventario_negocio')
@ObjectType()
export class InventarioNegocio {
  @PrimaryGeneratedColumn({ name: 'id_inventario' })
  @Field(() => Int)
  id_inventario: number;

  @Column({ name: 'producto_id', unique: true, nullable: true })
  @Field(() => Int, { nullable: true })
  producto_id: number;

  @OneToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  @Field(() => Producto, { nullable: true })
  producto: Producto;

  @Column({ default: 0 })
  @Field(() => Int)
  stock_actual: number;

  @Column({ default: 10 })
  @Field(() => Int)
  stock_minimo_alerta: number;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  ultima_actualizacion: Date;
}
