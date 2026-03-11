import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, CreateDateColumn } from 'typeorm';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Evento } from '../../eventos/entities/evento.entity';
import { Promocion } from '../../promociones/entities/promocione.entity';

@Entity('ventas')
@ObjectType()
export class Venta {
  @PrimaryGeneratedColumn({ name: 'id_venta' })
  @Field(() => Int)
  id_venta: number;

  @Column({ name: 'vendedor_id', nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @ManyToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column({ name: 'cliente_id', nullable: true })
  @Field(() => Int, { nullable: true })
  cliente_id: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  @Field(() => Cliente, { nullable: true })
  cliente: Cliente;

  @Column({ name: 'pedido_id', unique: true, nullable: true })
  @Field(() => Int, { nullable: true })
  pedido_id: number;

  @OneToOne(() => Pedido)
  @JoinColumn({ name: 'pedido_id' })
  @Field(() => Pedido, { nullable: true })
  pedido: Pedido;

  @Column({ name: 'evento_id', nullable: true })
  @Field(() => Int, { nullable: true })
  evento_id: number;

  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'evento_id' })
  @Field(() => Evento, { nullable: true })
  evento: Evento;

  @Column({ name: 'promocion_id', nullable: true })
  @Field(() => Int, { nullable: true })
  promocion_id: number;

  @ManyToOne(() => Promocion)
  @JoinColumn({ name: 'promocion_id' })
  @Field(() => Promocion, { nullable: true })
  promocion: Promocion;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  fecha_venta: Date;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  monto_total: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  metodo_pago: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  dinero_recibido: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  cambio_devuelto: number;
}
