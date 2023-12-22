import { Controller, Get, Post } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('channels')
@ApiExtraModels()
@Controller('api/workspaces/:workspace/channels')
export class ChannelsController {
    @ApiOperation({ summary: '워크스페이스 채널 모두 가져오기' })
    @Get()
    getAllChannels() {}

    @ApiOperation({ summary: '워크스페이스 채널 만들기' })
    @Post()
    createChannel() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 가져오기' })
    @Get(':channel')
    getSpecificChannel() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 채팅 가져오기' })
    @Get(':channel/chats')
    getChat() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 안읽은 채팅 가져오기' })
    @Get(':channel/unreads')
    getUnreads() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 채팅 보내기' })
    @Post(':channel/chats')
    postChat() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 이미지 업로드' })
    @Post(':channel/images')
    postImages() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 멤버 가져오기' })
    @Get(':channel/members')
    getAllMembers() {}

    @ApiOperation({ summary: '워크스페이스 특정 채널 멤버 초대하기' })
    @Post(':channel/members')
    inviteMembers() {}
}
