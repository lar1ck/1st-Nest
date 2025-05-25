import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: {
    id: number;
    name: string;
    email: string;
    isMarried: boolean;
    gender: string;
  }[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'Johndoe@gmail.com',
      isMarried: true,
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Secind',
      email: 'second@gmail.com',
      isMarried: true,
      gender: 'Female',
    },
    {
      id: 3,
      name: 'Ajend',
      email: 'ajend@gmail.com',
      isMarried: false,
      gender: 'Female',
    },
    {
      id: 4,
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      isMarried: false,
      gender: 'Male',
    },
    {
      id: 5,
      name: 'Pam Beesly',
      email: 'pam.beesly@dundermifflin.com',
      isMarried: true,
      gender: 'Female',
    },
    {
      id: 6,
      name: 'Jim Halpert',
      email: 'jim.halpert@dundermifflin.com',
      isMarried: true,
      gender: 'Male',
    },
    {
      id: 7,
      name: 'Dwight Schrute',
      email: 'dwight.schrute@dundermifflin.com',
      isMarried: false,
      gender: 'Male',
    },
    {
      id: 8,
      name: 'Angela Martin',
      email: 'angela.martin@dundermifflin.com',
      isMarried: false,
      gender: 'Female',
    },
    {
      id: 9,
      name: 'Oscar Martinez',
      email: 'oscar.martinez@dundermifflin.com',
      isMarried: false,
      gender: 'Male',
    },
    {
      id: 10,
      name: 'Kevin Malone',
      email: 'kevin.malone@dundermifflin.com',
      isMarried: false,
      gender: 'Male',
    },
    {
      id: 11,
      name: 'Phyllis Vance',
      email: 'phyllis.vance@dundermifflin.com',
      isMarried: true,
      gender: 'Female',
    },
    {
      id: 12,
      name: 'Stanley Hudson',
      email: 'stanley.hudson@dundermifflin.com',
      isMarried: true,
      gender: 'Male',
    },
    {
      id: 13,
      name: 'Creed Bratton',
      email: 'creed.bratton@dundermifflin.com',
      isMarried: false,
      gender: 'Male',
    },
    {
      id: 14,
      name: 'Meredith Palmer',
      email: 'meredith.palmer@dundermifflin.com',
      isMarried: false,
      gender: 'Female',
    },
    {
      id: 15,
      name: 'Ryan Howard',
      email: 'ryan.howard@dundermifflin.com',
      isMarried: false,
      gender: 'Male',
    },
  ];
  getAllUsers() {
    return this.users;
  }

  getuserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    email: string;
    isMarried: boolean;
    gender: string;
  }) {
    this.users.push(user);
  }
}
