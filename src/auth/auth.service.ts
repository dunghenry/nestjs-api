import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { username: 'Tran Van Dung' };
  }
  signin() {
    return { username: 'Tran Van Dung' };
  }
}
