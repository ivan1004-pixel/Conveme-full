import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ComprasInsumo } from '../../compras-insumos/entities/compras-insumo.entity';
import { InsumosMateriaPrima } from '../../insumos-materia-prima/entities/insumos-materia-prima.entity';

@Entity('det_compras_insumos')
@ObjectType()
export class DetComprasInsumo {
  @PrimaryGeneratedColumn({ name: 'id_det_compra' })
  @Field(() => Int)
  id_det_compra: number;

  @Column({ name: 'compra_insumo_id', nullable: true })
  @Field(() => Int, { nullable: true })
  compra_insumo_id: number;

  @ManyToOne(() => ComprasInsumo)
  @JoinColumn({ name: 'compra_insumo_id' })
  @Field(() => ComprasInsumo, { nullable: true })
  compra_insumo: ComprasInsumo;

  @Column({ name: 'insumo_id', nullable: true })
  @Field(() => Int, { nullable: true })
  insumo_id: number;

  @ManyToOne(() => InsumosMateriaPrima)
  @JoinColumn({ name: 'insumo_id' })
  @Field(() => InsumosMateriaPrima, { nullable: true })
  insumo: InsumosMateriaPrima;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  cantidad_comprada: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  costo_unitario: number;
}
