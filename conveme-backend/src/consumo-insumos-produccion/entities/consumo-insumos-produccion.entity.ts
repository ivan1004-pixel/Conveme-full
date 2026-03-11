import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OrdenesProduccion } from '../../ordenes-produccion/entities/ordenes-produccion.entity';
import { InsumosMateriaPrima } from '../../insumos-materia-prima/entities/insumos-materia-prima.entity';

@Entity('consumo_insumos_produccion')
@ObjectType()
export class ConsumoInsumosProduccion {
  @PrimaryGeneratedColumn({ name: 'id_consumo' })
  @Field(() => Int)
  id_consumo: number;

  @Column({ name: 'orden_produccion_id', nullable: true })
  @Field(() => Int, { nullable: true })
  orden_produccion_id: number;

  @ManyToOne(() => OrdenesProduccion)
  @JoinColumn({ name: 'orden_produccion_id' })
  @Field(() => OrdenesProduccion, { nullable: true })
  orden_produccion: OrdenesProduccion;

  @Column({ name: 'insumo_id', nullable: true })
  @Field(() => Int, { nullable: true })
  insumo_id: number;

  @ManyToOne(() => InsumosMateriaPrima)
  @JoinColumn({ name: 'insumo_id' })
  @Field(() => InsumosMateriaPrima, { nullable: true })
  insumo: InsumosMateriaPrima;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  cantidad_utilizada: number;
}
