import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CategoriasGasto } from '../../categorias-gasto/entities/categorias-gasto.entity';
import { Empleado } from '../../empleados/entities/empleado.entity';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';
import { Evento } from '../../eventos/entities/evento.entity';

@Entity('gastos_operativos')
@ObjectType()
export class GastosOperativo {
  @PrimaryGeneratedColumn({ name: 'id_gasto' })
  @Field(() => Int)
  id_gasto: number;

  @Column({ name: 'categoria_gasto_id', nullable: true })
  @Field(() => Int, { nullable: true })
  categoria_gasto_id: number;

  @ManyToOne(() => CategoriasGasto)
  @JoinColumn({ name: 'categoria_gasto_id' })
  @Field(() => CategoriasGasto, { nullable: true })
  categoria_gasto: CategoriasGasto;

  @Column({ name: 'empleado_id', nullable: true })
  @Field(() => Int, { nullable: true })
  empleado_id: number;

  @ManyToOne(() => Empleado)
  @JoinColumn({ name: 'empleado_id' })
  @Field(() => Empleado, { nullable: true })
  empleado: Empleado;

  @Column({ name: 'vendedor_id', nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @ManyToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column({ name: 'evento_id', nullable: true })
  @Field(() => Int, { nullable: true })
  evento_id: number;

  @ManyToOne(() => Evento)
  @JoinColumn({ name: 'evento_id' })
  @Field(() => Evento, { nullable: true })
  evento: Evento;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  monto: number;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  fecha: Date;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  comprobante_url: string;
}
