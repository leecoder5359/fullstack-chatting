import { INestApplication } from '@nestjs/common';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';

export const setupInterceptors = (app: INestApplication) => {
    app.useGlobalInterceptors(new UndefinedToNullInterceptor());
};
