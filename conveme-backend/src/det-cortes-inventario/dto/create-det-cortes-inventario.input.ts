import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDetCortesInventarioInput {
  @Field(() => Int, { nullable: true })
  corte_id?: number;
  @Field(() => Int, { nullable: true })
  producto_id?: number;
  @Field(() => Int, { nullable: true })
  cantidad_vendida?: number;
  @Field(() => Int, { nullable: true })
  cantidad_devuelta?: number;
  @Field(() => Int, { nullable: true })
  merma_reportada?: number;
}
