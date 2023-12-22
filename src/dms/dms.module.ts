import { Module } from '@nestjs/common';
import { DmsService } from './service/dms.service';
import { DmsController } from './controller/dms.controller';

@Module({
    providers: [DmsService],
    controllers: [DmsController],
})
export class DmsModule {}
