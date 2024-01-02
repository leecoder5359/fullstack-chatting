import { Injectable } from '@nestjs/common';
import { IUserService } from './interface/user-service.interface';

@Injectable()
export class UsersService implements IUserService {}
