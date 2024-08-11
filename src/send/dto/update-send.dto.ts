import { PartialType } from '@nestjs/mapped-types';
import { CreateSendDto } from './create-send.dto';

export class UpdateSendDto extends PartialType(CreateSendDto) {}
