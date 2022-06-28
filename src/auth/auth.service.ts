import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { username: 'Tran Van Dung' };
  }
  signin() {
    return { username: 'Tran Van Dung' };
  }
}
