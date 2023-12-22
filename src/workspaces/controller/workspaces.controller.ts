import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
    @Get(':workspace/members')
    getAllMembers() {}

    @Post(':workspace/members')
    inviteMembers() {}

    @Delete(':workspace/members/:id')
    kickMember() {}

    @Get(':workspace/members/:id')
    getMemberInfo() {}
}
