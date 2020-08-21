import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4, {
    message: 'O nome de usuário deve conter no minimo 4 caracteres',
  })
  @MaxLength(20, {
    message: 'O nome de usuário deve conter no máximo 20 caracteres',
  })
  username: string;

  @IsString()
  @MinLength(8, { message: 'A senha deve conter mais de 8 caracteres' })
  @MaxLength(20, { message: 'A senha não pode ultrapassar 20 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'a senha deve conter: uma letra minuscula, uma letra maiscula. Um número ou caractere especial',
  })
  password: string;
}
