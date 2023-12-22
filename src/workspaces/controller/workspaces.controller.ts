import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('workspaces')
@ApiExtraModels()
@Controller('api/workspaces')
export class WorkspacesController {
    @ApiOperation({ summary: '내 워크스페이스 가져오기' })
    @Get(':workspace/members')
    getAllMembers() {}

    @ApiOperation({ summary: '워크스페이스 만들기' })
    @Post(':workspace/members')
    inviteMembers() {}

    @ApiOperation({ summary: '워크스페이스 멤버 추방하기' })
    @Delete(':workspace/members/:id')
    kickMember() {}

    @ApiOperation({ summary: '워크스페이스 채널 가져오기' })
    @Get(':workspace/members/:id')
    getMemberInfo() {}
}
