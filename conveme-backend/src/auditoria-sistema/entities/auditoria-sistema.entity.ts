import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('auditoria_sistema')
@ObjectType()
export class AuditoriaSistema {
  @PrimaryGeneratedColumn({ name: 'id_auditoria' })
  @Field(() => Int)
  id_auditoria: number;

  @Column({ name: 'usuario_id', nullable: true })
  @Field(() => Int, { nullable: true })
  usuario_id: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  @Field(() => Usuario, { nullable: true })
  usuario: Usuario;

  @Column({ nullable: true })
  @Field({ nullable: true })
  accion: string;

  @Column({ name: 'tabla_afectada', nullable: true })
  @Field({ nullable: true })
  tabla_afectada: string;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  fecha: Date;
}
