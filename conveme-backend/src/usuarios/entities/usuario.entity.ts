import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity('usuarios')
@ObjectType()
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  @Field(() => Int)
  id_usuario: number;

  @Column({ unique: true })
  @Field()
  username: string;

  @Column({ name: 'password_hash' })
  @Field()
  password_hash: string;

  @Column({ name: 'rol_id', nullable: true })
  @Field(() => Int, { nullable: true })
  rol_id: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'rol_id' })
  @Field(() => Role, { nullable: true })
  rol: Role;

  @Column({ default: true })
  @Field()
  activo: boolean;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  ultimo_acceso: Date;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  created_at: Date;
}
