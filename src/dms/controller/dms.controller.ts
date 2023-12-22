import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:workspace/dms')
export class DmsController {
    @Get(':id/chats')
    getChat(@Query('perPage') perPage, @Param() param) {
        console.log(perPage);
        console.log(param);
    }

    @Get(':id/unreads')
    getUnreads() {}

    @Post(':id/chats')
    postChat() {}

    @Post(':id/images')
    postImages() {}
}
