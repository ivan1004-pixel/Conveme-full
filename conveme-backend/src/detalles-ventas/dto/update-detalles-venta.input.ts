import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDetallesVentaInput } from './create-detalles-venta.input';

@InputType()
export class UpdateDetallesVentaInput extends PartialType(CreateDetallesVentaInput) {
  @Field(() => Int) id_det_venta: number;
}
