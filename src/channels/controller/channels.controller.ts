import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:workspace/channels')
export class ChannelsController {
    @Get()
    getAllChannels() {}

    @Post()
    createChannel() {}

    @Get(':channel')
    getSpecificChannel() {}

    @Get(':channel/chats')
    getChat() {}

    @Get(':channel/unreads')
    getUnreads() {}

    @Post(':channel/chats')
    postChat() {}

    @Post(':channel/images')
    postImages() {}

    @Get(':channel/members')
    getAllMembers() {}

    @Post(':channel/members')
    inviteMembers() {}
}
