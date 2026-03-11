import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';

@Entity('cuentas_bancarias_vendedor')
@ObjectType()
export class CuentasBancariasVendedor {
  @PrimaryGeneratedColumn({ name: 'id_cuenta' })
  @Field(() => Int)
  id_cuenta: number;

  @Column({ name: 'vendedor_id', nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @ManyToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column({ nullable: true })
  @Field({ nullable: true })
  banco: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  titular_cuenta: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  clabe_interbancaria: string;

  @Column({ default: true })
  @Field()
  es_principal: boolean;
}
