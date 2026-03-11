import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('detalles_ventas')
@ObjectType()
export class DetallesVenta {
  @PrimaryGeneratedColumn({ name: 'id_det_venta' })
  @Field(() => Int)
  id_det_venta: number;

  @Column({ name: 'venta_id', nullable: true })
  @Field(() => Int, { nullable: true })
  venta_id: number;

  @ManyToOne(() => Venta)
  @JoinColumn({ name: 'venta_id' })
  @Field(() => Venta, { nullable: true })
  venta: Venta;

  @Column({ name: 'producto_id', nullable: true })
  @Field(() => Int, { nullable: true })
  producto_id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  @Field(() => Producto, { nullable: true })
  producto: Producto;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  cantidad: number;

  @Column({ default: false })
  @Field()
  aplico_mayoreo: boolean;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  precio_unitario_historico: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  subtotal: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  monto_comision_generada: number;
}
