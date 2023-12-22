import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import {
    IUserService,
    USER_SERVICE,
} from '../service/interface/user-service.interface';
import { JoinReq } from './payload/request/join.req';

@Controller('api/users')
export class UsersController {
    constructor(
        @Inject(USER_SERVICE) private readonly userService: IUserService,
    ) {}

    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @Post()
    join(@Body() joinReq: JoinReq) {
    }

    @Post('login')
    login(@Req() req: Request) {
    }

    @Post('logout')
    logout(@Req() req: Request, @Res() res: Response) {
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
}
