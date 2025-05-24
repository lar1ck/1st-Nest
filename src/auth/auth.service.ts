import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { message: 'I am signing In' };
  }
  signup() {
    return { message: 'I am signing Up' };
  }
}
