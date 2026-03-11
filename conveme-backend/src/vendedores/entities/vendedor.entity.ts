import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Escuela } from '../../escuelas/entities/escuela.entity';
import { Municipio } from '../../municipios/entities/municipio.entity';

@Entity('vendedores')
@ObjectType()
export class Vendedor {
  @PrimaryGeneratedColumn({ name: 'id_vendedor' })
  @Field(() => Int)
  id_vendedor: number;

  @Column({ name: 'usuario_id', unique: true, nullable: true })
  @Field(() => Int, { nullable: true })
  usuario_id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  @Field(() => Usuario, { nullable: true })
  usuario: Usuario;

  @Column({ name: 'escuela_id', nullable: true })
  @Field(() => Int, { nullable: true })
  escuela_id: number;

  @ManyToOne(() => Escuela)
  @JoinColumn({ name: 'escuela_id' })
  @Field(() => Escuela, { nullable: true })
  escuela: Escuela;

  @Column({ nullable: true })
  @Field({ nullable: true })
  nombre_completo: string;

  @Column({ unique: true, nullable: true })
  @Field({ nullable: true })
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  instagram_handle: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  calle_y_numero: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  colonia: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  codigo_postal: string;

  @Column({ name: 'municipio_id', nullable: true })
  @Field(() => Int, { nullable: true })
  municipio_id: number;

  @ManyToOne(() => Municipio)
  @JoinColumn({ name: 'municipio_id' })
  @Field(() => Municipio, { nullable: true })
  municipio: Municipio;

  @Column({ nullable: true })
  @Field({ nullable: true })
  facultad_o_campus: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  punto_entrega_habitual: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  estado_laboral: string;

  @Column('decimal', { precision: 10, scale: 2, default: 10 })
  @Field(() => Float)
  comision_fija_menudeo: number;

  @Column('decimal', { precision: 10, scale: 2, default: 5 })
  @Field(() => Float)
  comision_fija_mayoreo: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @Field(() => Float)
  meta_ventas_mensual: number;
}
