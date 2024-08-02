import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  HttpStatus,
  Body,
  HttpCode,
} from '@nestjs/common';
import {
  LocalAuthGuard,
  AuthService,
  // JwtAuthGuard,
  BasicAuthGuard,
} from './auth';
import { User } from './users';
import { AppRequest } from './shared';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get(['', 'ping'])
  healthCheck() {
    return { message: 'OK' };
  }

  @Post('api/auth/register')
  @HttpCode(HttpStatus.CREATED)
  // TODO ADD validation
  register(@Body() body: User): Promise<{ userId: string }> {
    return this.authService.register(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async login(@Request() req: AppRequest) {
    return this.authService.login(req.user, 'basic');
  }

  @UseGuards(BasicAuthGuard)
  @Get('api/profile')
  async getProfile(@Request() req: AppRequest) {
    return { user: req.user };
  }
}
