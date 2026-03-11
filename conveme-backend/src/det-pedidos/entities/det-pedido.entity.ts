import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('det_pedidos')
@ObjectType()
export class DetPedido {
  @PrimaryGeneratedColumn({ name: 'id_det_pedido' })
  @Field(() => Int)
  id_det_pedido: number;

  @Column({ name: 'pedido_id', nullable: true })
  @Field(() => Int, { nullable: true })
  pedido_id: number;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'pedido_id' })
  @Field(() => Pedido, { nullable: true })
  pedido: Pedido;

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
}
