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
import { LambdaFunctionURLResult } from 'aws-lambda';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get(['', 'ping'])
  healthCheck() {
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
    };
  }

  @Post('api/auth/register')
  @HttpCode(HttpStatus.CREATED)
  // TODO ADD validation
  async register(@Body() body: User): Promise<LambdaFunctionURLResult> {
    const res = await this.authService.register(body);

    return JSON.stringify(res);
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  async login(@Request() req: AppRequest) {
    const token = this.authService.login(req.user, 'basic');

    return JSON.stringify(token);
  }

  @UseGuards(BasicAuthGuard)
  @Get('api/profile')
  async getProfile(@Request() req: AppRequest) {
    return JSON.stringify({
      user: req.user,
    });
  }
}
