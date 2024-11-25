import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class BasicAuthGuard extends AuthGuard('basic') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    const [login, password, id] = Buffer.from(token, 'base64')
      .toString()
      .split(':');

    if (!id) {
      throw new UnauthorizedException();
    }

    request['user'] = {
      id,
      login,
    };

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' || type === 'Basic' ? token : undefined;
  }
}
