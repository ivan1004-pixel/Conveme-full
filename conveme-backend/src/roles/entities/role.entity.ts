import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  @Field(() => Int)
  id_rol: number;

  @Column({ unique: true })
  @Field()
  nombre: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  descripcion?: string;
}
