import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req) {
    // jwt token
    console.log(req.user);
    return req.user;
    //return 'login success';
  }
}
