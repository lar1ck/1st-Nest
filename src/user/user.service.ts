import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: { id: number; name: string; email: string }[] = [
    { id: 1, name: 'John Doe', email: 'Johndoe@gmail.com' },
    { id: 2, name: 'Secind', email: 'second@gmail.com' },
    { id: 3, name: 'Ajend', email: 'ajend@gmail.com' },
  ];
  getAllUsers() {
    return this.users;
  }

  getuserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: { id: number; name: string; email: string }) {
    this.users.push(user);
  }
}
