import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';

@Entity('pedidos')
@ObjectType()
export class Pedido {
  @PrimaryGeneratedColumn({ name: 'id_pedido' })
  @Field(() => Int)
  id_pedido: number;

  @Column({ name: 'cliente_id', nullable: true })
  @Field(() => Int, { nullable: true })
  cliente_id: number;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  @Field(() => Cliente, { nullable: true })
  cliente: Cliente;

  @Column({ name: 'vendedor_id', nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @ManyToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha_pedido: Date;

  @Column({ nullable: true })
  @Field({ nullable: true })
  estado_pedido: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  monto_estimado: number;
}
