import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';
import { Tamano } from '../../tamanos/entities/tamano.entity';

@Entity('productos')
@ObjectType()
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  @Field(() => Int)
  id_producto: number;

  @Column({ unique: true, nullable: true })
  @Field({ nullable: true })
  sku: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  nombre: string;

  @Column({ name: 'categoria_id', nullable: true })
  @Field(() => Int, { nullable: true })
  categoria_id: number;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  @Field(() => Categoria, { nullable: true })
  categoria: Categoria;

  @Column({ name: 'tamaño_id', nullable: true }) // Columna SQL
  @Field(() => Int, { nullable: true })
  tamano_id: number; // Propiedad TS

  @ManyToOne(() => Tamano)
  @JoinColumn({ name: 'tamaño_id' })
  @Field(() => Tamano, { nullable: true })
  tamano: Tamano;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  precio_unitario: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  precio_mayoreo: number;

  @Column({ default: 12 })
  @Field(() => Int)
  cantidad_minima_mayoreo: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  costo_produccion: number;

  @Column({ default: true })
  @Field()
  activo: boolean;
}
