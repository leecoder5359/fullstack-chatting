import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Token = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getResponse();
        return request.locals.jwt;
    },
);
