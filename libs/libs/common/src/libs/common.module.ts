import { Module } from '@nestjs/common';
import { Libs/commonService } from './libs/common.service';

@Module({
  providers: [Libs/commonService],
  exports: [Libs/commonService],
})
export class Libs/commonModule {}
