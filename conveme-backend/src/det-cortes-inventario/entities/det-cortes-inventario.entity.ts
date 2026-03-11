import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CortesVendedor } from '../../cortes-vendedor/entities/cortes-vendedor.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('det_cortes_inventario')
@ObjectType()
export class DetCortesInventario {
  @PrimaryGeneratedColumn({ name: 'id_det_corte' })
  @Field(() => Int)
  id_det_corte: number;

  @Column({ name: 'corte_id', nullable: true })
  @Field(() => Int, { nullable: true })
  corte_id: number;

  @ManyToOne(() => CortesVendedor)
  @JoinColumn({ name: 'corte_id' })
  @Field(() => CortesVendedor, { nullable: true })
  corte: CortesVendedor;

  @Column({ name: 'producto_id', nullable: true })
  @Field(() => Int, { nullable: true })
  producto_id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  @Field(() => Producto, { nullable: true })
  producto: Producto;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  cantidad_vendida: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  cantidad_devuelta: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  merma_reportada: number;
}
