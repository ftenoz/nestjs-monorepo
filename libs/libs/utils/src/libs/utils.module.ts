import { Module } from '@nestjs/common';
import { Libs/utilsService } from './libs/utils.service';

@Module({
  providers: [Libs/utilsService],
  exports: [Libs/utilsService],
})
export class Libs/utilsModule {}
