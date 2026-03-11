import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('clientes')
@ObjectType()
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  @Field(() => Int)
  id_cliente: number;

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

  @Column({ nullable: true })
  @Field({ nullable: true })
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  telefono: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  direccion_envio: string;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  fecha_registro: Date;
}
