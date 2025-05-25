import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    return this.userService.getuserById(+id);
  }
}
