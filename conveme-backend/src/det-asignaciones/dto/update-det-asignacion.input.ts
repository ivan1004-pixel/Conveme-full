import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDetAsignacionInput } from './create-det-asignacion.input';

@InputType()
export class UpdateDetAsignacionInput extends PartialType(CreateDetAsignacionInput) {
  @Field(() => Int) id_det_asignacion: number;
}
