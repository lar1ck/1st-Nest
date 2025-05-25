import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from '@nestjs/class-validator';

export class CreateUserDto {
  id: number;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty()
  @MinLength(5, { message: 'Name must have a minimum of 5 characters' })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  @IsOptional()
  isMarried?: boolean;

  @IsOptional()
  gender: string;
}
