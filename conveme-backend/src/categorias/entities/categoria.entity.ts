import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
@ObjectType()
export class Categoria {
  @PrimaryGeneratedColumn({ name: 'id_categoria' })
  @Field(() => Int)
  id_categoria: number;

  @Column({ unique: true })
  @Field()
  nombre: string;
}
