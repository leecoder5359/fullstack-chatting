import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { USER_SERVICE } from './service/interface/user-service.interface';

@Module({
    providers: [
        {
            provide: USER_SERVICE,
            useClass: UsersService,
        },
    ],
    controllers: [UsersController],
})
export class UsersModule {}
