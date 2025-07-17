# Package Manager

Thư viện của Javascript

- Cài đặt
- Gỡ bỏ
- Cập nhật phiên bản
- Di chuyển

==> Công cụ quản lý thư viện (Package Manager)

Trong js: npm (Tích hợp sẵn vào nodejs)

## Khởi tạo dự án

npm init -y --> Sinh ra file package.json

## Cài đặt thư viện

npm i tenthuvien@phienban

## Các loại dependencies

1. Simple Dependencies (Hay còn gọi Dependencies)

npm i tenthuvien@phienban

2. Develope Dependencies (Các gói thư viện phục vụ cho việc phát triển)

npm i tenthuvien@phienban --save-dev

## Cài đặt tất cả dependencies

npm i hoặc npm install

## Các kiểu cài đặt

1. Cài đặt Local

- Đang đứng ở đâu thì khi cài đặt các dependencies --> Tải về node_modules ở folder đó
- Mặc định sẽ cài đặt local

2. Cài đặt Global

- Tải về dependencies vào node_modules ở 1 nơi khác trong server
- Cú pháp

npm i tenthuvien@phienban -g

Kiểm tra các dependencies global đã cài

npm list -g

Kiểm tra đường dẫn node_modules global

npm root -g

## Xóa bỏ dependencies

npm uninstall tenthuvien

## Cập nhật phiên bản mới

npm update tenthuvien@phienban

## Cập nhật phiên bản tất cả dependencies

npm update (Theo package.json)

Lưu ý:

- Để dự án tránh bị lỗi --> Không xóa package-lock.json
- Chạy npm i

## Cài đặt tất cả dependencies thuộc simple

npm i --production
