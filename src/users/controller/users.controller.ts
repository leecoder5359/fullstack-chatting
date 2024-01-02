import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import {
    IUserService,
    USER_SERVICE,
} from '../service/interface/user-service.interface';
import { JoinReq } from './payload/request/join.req';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';

@ApiTags('users')
@ApiExtraModels(JoinReq)
@Controller('api/users')
export class UsersController {
    constructor(
        @Inject(USER_SERVICE) private readonly userService: IUserService,
    ) {}

    @ApiOperation({ summary: '내 정보 조회' })
    @Get()
    getUsers(@User() user) {
        return user;
    }

    @ApiOperation({ summary: '회원가입' })
    @Post()
    join(@Body() joinReq: JoinReq) {}

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    login(@Req() @User() user) {
        return user;
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logout(@Req() req: Request, @Res() res: Response) {
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
}
