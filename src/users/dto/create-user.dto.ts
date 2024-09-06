import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, { message: "Email không đúng định dạng" })
    @IsNotEmpty({ message: "Email không được để trống" })
    email: string;
    @IsNotEmpty({ message: "Password không được để trống" })
    @MinLength(3, { message: "Mật khẫu tối thiểu 3 ký tự" })
    password: string;
    @IsNotEmpty({ message: "Tên không được để trống" })
    name: string;
    address: string;
    phone: string
}
