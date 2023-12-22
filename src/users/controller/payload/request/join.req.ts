import { ApiProperty } from '@nestjs/swagger';

export class JoinReq {
    @ApiProperty({
        example: 'leecoder5359@gmail.com',
        description: '이메일',
        required: true,
    })
    email: string;

    @ApiProperty({ example: 'leecoder', description: '닉네임', required: true })
    nickname: string;

    @ApiProperty({ example: '1234', description: '비밀번호', required: true })
    password: string;
}
