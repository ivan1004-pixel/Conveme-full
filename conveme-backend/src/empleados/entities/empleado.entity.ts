import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Municipio } from '../../municipios/entities/municipio.entity';

@Entity('empleados')
@ObjectType()
export class Empleado {
  @PrimaryGeneratedColumn({ name: 'id_empleado' })
  @Field(() => Int)
  id_empleado: number;

  @Column({ name: 'usuario_id', unique: true, nullable: true })
  @Field(() => Int, { nullable: true })
  usuario_id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  @Field(() => Usuario, { nullable: true })
  usuario: Usuario;

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
  puesto: string;

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
}
