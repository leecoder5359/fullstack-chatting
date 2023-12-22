import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('dms')
@ApiExtraModels()
@Controller('api/workspaces/:workspace/dms')
export class DmsController {
    @ApiOperation({ summary: '워크스페이스 DM 모두 가져오기' })
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: '한 번에 가져오는 개수',
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: '불러올 페이지',
    })
    @Get(':id/chats')
    getChat(@Query('perPage') perPage, @Param() param) {
        console.log(perPage);
        console.log(param);
    }

    @ApiOperation({ summary: '워크스페이스 특정 DM 읽지않은 채팅 가져오기' })
    @Get(':id/unreads')
    getUnreads() {}

    @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 가져오기' })
    @Post(':id/chats')
    postChat() {}

    @ApiOperation({ summary: '워크스페이스 특정 DM 이미지 업로드' })
    @Post(':id/images')
    postImages() {}
}
