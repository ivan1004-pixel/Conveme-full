import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias_gasto')
@ObjectType()
export class CategoriasGasto {
  @PrimaryGeneratedColumn({ name: 'id_categoria_gasto' })
  @Field(() => Int)
  id_categoria_gasto: number;

  @Column({ unique: true, nullable: true })
  @Field({ nullable: true })
  nombre: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  tipo: string;
}
