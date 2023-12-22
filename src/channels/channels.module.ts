import { Module } from '@nestjs/common';
import { ChannelsService } from './service/channels.service';
import { ChannelsController } from './controller/channels.controller';

@Module({
    providers: [ChannelsService],
    controllers: [ChannelsController],
})
export class ChannelsModule {}
