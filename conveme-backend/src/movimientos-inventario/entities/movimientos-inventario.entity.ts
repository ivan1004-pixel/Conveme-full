import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('movimientos_inventario')
@ObjectType()
export class MovimientosInventario {
  @PrimaryGeneratedColumn({ name: 'id_movimiento' })
  @Field(() => Int)
  id_movimiento: number;

  @Column({ name: 'producto_id', nullable: true })
  @Field(() => Int, { nullable: true })
  producto_id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  @Field(() => Producto, { nullable: true })
  producto: Producto;

  @Column({ name: 'usuario_id', nullable: true })
  @Field(() => Int, { nullable: true })
  usuario_id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  @Field(() => Usuario, { nullable: true })
  usuario: Usuario;

  @Column({ nullable: true })
  @Field({ nullable: true })
  tipo_movimiento: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  cantidad: number;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  motivo: string;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  fecha: Date;
}
