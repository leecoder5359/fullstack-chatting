import { Module } from '@nestjs/common';
import { WorkspacesService } from './service/workspaces.service';
import { WorkspacesController } from './controller/workspaces.controller';

@Module({
    providers: [WorkspacesService],
    controllers: [WorkspacesController],
})
export class WorkspacesModule {}
