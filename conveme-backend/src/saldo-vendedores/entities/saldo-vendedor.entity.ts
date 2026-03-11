import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { Vendedor } from '../../vendedores/entities/vendedor.entity';

@Entity('saldo_vendedores')
@ObjectType()
export class SaldoVendedor {
  @PrimaryGeneratedColumn({ name: 'id_saldo' })
  @Field(() => Int)
  id_saldo: number;

  @Column({ name: 'vendedor_id', unique: true, nullable: true })
  @Field(() => Int, { nullable: true })
  vendedor_id: number;

  @OneToOne(() => Vendedor)
  @JoinColumn({ name: 'vendedor_id' })
  @Field(() => Vendedor, { nullable: true })
  vendedor: Vendedor;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @Field(() => Float)
  comisiones_acumuladas: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  @Field(() => Float)
  deuda_por_faltantes: number;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  ultima_actualizacion: Date;
}
