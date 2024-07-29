# Dự Án NestJS

![NestJS](https://nestjs.com/img/logo_text.svg)

Một ứng dụng backend mạnh mẽ và có thể mở rộng được xây dựng với [NestJS](https://nestjs.com/), một framework Node.js tiến bộ cho việc xây dựng các ứng dụng phía server hiệu quả, đáng tin cậy và có thể mở rộng.

## Mục Lục

- [Tính Năng](#tính-năng)
- [Cài Đặt](#cài-đặt)
- [Chạy Ứng Dụng](#chạy-ứng-dụng)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Giấy Phép](#giấy-phép)

## Tính Năng

- Kiến trúc mô-đun
- Tích hợp xác thực JWT
- ORM MongoDB với Mongoose
- Chức năng gửi email
- Giới hạn tốc độ yêu cầu
- Xác thực toàn diện
- Điểm kiểm tra sức khỏe hệ thống
- Bảo mật HTTP headers

## Cài Đặt

1. Clone repository:
   ```bash
   git clone https://github.com/nguyenhuudaigithub/Back-end-nestjs.git
   cd nestjs-project
   ```
2. Cài đặt các thư viện:
   ```bash
   npm install
   ```

## Chạy Ứng Dụng

1. Chạy server ở chế độ phát triển:

   ```bash
   npm run dev
   ```

2. Ứng dụng sẽ chạy tại `http://localhost:1604`.

## Scripts

- `build`: Biên dịch ứng dụng
  ```bash
  npm run build
  Flavor-flavMy job
  ```
- `format`: Định dạng mã nguồn bằng Prettier
  ```bash
  npm run format
  ```
- `start`: Chạy ứng dụng
  ```bash
  npm run start
  ```
- `dev`: Chạy ứng dụng ở chế độ watch
  ```bash
  npm run dev
  ```
- `start:debug`: Chạy ứng dụng ở chế độ debug với watch
  ```bash
  npm run start:debug
  ```
- `start:prod`: Chạy ứng dụng ở chế độ production
  ```bash
  npm run start:prod
  ```
- `lint`: Phân tích mã nguồn bằng ESLint
  ```bash
  npm run lint
  ```
- `test`: Chạy các bài kiểm tra bằng Jest
  ```bash
  npm run test
  ```
- `test:watch`: Chạy các bài kiểm tra ở chế độ watch
  ```bash
  npm run test:watch
  ```

## Dependencies

- **@nestjs-modules/mailer**: Gửi email trong ứng dụng NestJS.
- **@nestjs/common**: Các thành phần cơ bản cho NestJS.
- **@nestjs/config**: Quản lý cấu hình môi trường trong NestJS.
- **@nestjs/core**: Cốt lõi của NestJS framework.
- **@nestjs/jwt**: Hỗ trợ JWT (JSON Web Token) cho xác thực.
- **@nestjs/mapped-types**: Chuyển đổi và ánh xạ các loại đối tượng.
- **@nestjs/mongoose**: Tích hợp Mongoose với NestJS.
- **@nestjs/passport**: Tích hợp PassportJS cho xác thực.
- **@nestjs/platform-express**: Sử dụng Express framework trong NestJS.
- **@nestjs/terminus**: Xây dựng các điểm kiểm tra sức khỏe hệ thống.
- **@nestjs/throttler**: Hỗ trợ kiểm soát tốc độ yêu cầu.
- **api-query-params**: Phân tích và xử lý các tham số truy vấn API.
- **bcryptjs**: Mã hóa và giải mã mật khẩu.
- **class-transformer**: Biến đổi các đối tượng lớp.
- **class-validator**: Xác thực các đối tượng lớp.
- **cookie-parser**: Phân tích cookie.
- **ejs**: Tạo template động với Embedded JavaScript.
- **handlebars**: Tạo template động.
- **helmet**: Bảo mật HTTP headers.
- **mongoose**: Thư viện ORM cho MongoDB.
- **ms**: Chuyển đổi thời gian thành chuỗi và ngược lại.
- **nodemailer**: Gửi email từ Node.js.
- **or**: Một công cụ logic hoặc.
- **passport**: Middleware xác thực.
- **passport-jwt**: Chiến lược xác thực bằng JWT.
- **passport-local**: Chiến lược xác thực cục bộ.
- **reflect-metadata**: Hỗ trợ metadata reflection trong TypeScript.
- **rxjs**: Thư viện lập trình phản ứng.
- **soft-delete-plugin-mongoose**: Hỗ trợ xóa mềm trong Mongoose.

## Dev Dependencies

- **@compodoc/compodoc**: Tạo tài liệu cho NestJS.
- **@nestjs/cli**: Công cụ dòng lệnh cho NestJS.
- **@nestjs/schematics**: Hỗ trợ tạo mã tự động cho NestJS.
- **@nestjs/testing**: Hỗ trợ kiểm thử cho NestJS.
- **@types/bcryptjs**: Định nghĩa kiểu TypeScript cho bcryptjs.
- **@types/cookie-parser**: Định nghĩa kiểu TypeScript cho cookie-parser.
- **@types/express**: Định nghĩa kiểu TypeScript cho Express.
- **@types/jest**: Định nghĩa kiểu TypeScript cho Jest.
- **@types/ms**: Định nghĩa kiểu TypeScript cho ms.
- **@types/multer**: Định nghĩa kiểu phạm vi cho multer.
- **@types/node**: Định nghĩa kiểu TypeScript cho Node.js.
- **@types/nodemailer**: Định nghĩa kiểu TypeScript cho nodemailer.
- **@types/passport-jwt**: Định nghĩa kiểu TypeScript cho passport-jwt.
- **@types/passport-local**: Định nghĩa kiểu TypeScript cho passport-local.
- **@types/supertest**: Định nghĩa kiểu TypeScript cho supertest.
- **@typescript-eslint/eslint-plugin**: Plugin ESLint cho TypeScript.
- **@typescript-eslint/parser**: Trình phân tích cú pháp ESLint cho TypeScript.
- **eslint**: Công cụ phân tích mã tĩnh.
- **eslint-config-prettier**: Tích hợp ESLint với Prettier.
- **eslint-plugin-prettier**: Chạy Prettier như một quy tắc ESLint.
- **jest**: Thư viện kiểm thử JavaScript.
- **prettier**: Định dạng mã nguồn.
- **source-map-support**: Hỗ trợ bản đồ nguồn cho lỗi stack trace.
- **supertest**: Kiểm thử HTTP.
- **ts-jest**: Sử dụng TypeScript với Jest.
- **ts-loader**: Tải TypeScript trong webpack.
- **ts-node**: Chạy TypeScript trực tiếp trong Node.js.
- **tsconfig-paths**: Hỗ các hỗ trợ alias đường dẫn trong TypeScript.
- **typescript**: Ngôn ngữ lập trình TypeScript.
- **webpack**: Công cụ bundling cho JavaScript.

## Giấy Phép

Dự án này được cấp phép theo [MIT License](LICENSE).
