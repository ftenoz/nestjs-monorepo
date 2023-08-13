import { Module } from '@nestjs/common';
import { Libs/authService } from './libs/auth.service';

@Module({
  providers: [Libs/authService],
  exports: [Libs/authService],
})
export class Libs/authModule {}
