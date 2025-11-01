<?php
//cookie: Mẩu tin được truyền từ client đến server (Làm việc qua header)

//Cách hoạt động: 
//1. Server có yêu cầu set cookie --> Trả về header có tên là Set-Cookie

//2. Trình duyệt dựa vào header do server trả về để lưu lại vào bộ nhớ trình duyệt

//3. Khi có request tiếp theo --> cookie sẽ được đính kèm tự động vào header

//Lưu ý: 
// - Nếu dữ liệu nhảy cảm --> Đánh httponly
// - Cookie chỉ share cho các sub-domain

// $date = new DateTime();
// $date->setTimestamp(time() + 3600);
// $expire = $date->format(DateTime::COOKIE);
// header("Set-Cookie: name=hoangan;path=/;max-age=3600;httponly");
// header("Set-Cookie: token=123;path=/;max-age=3600;httponly");

// $allheader = getallheaders();
// echo '<pre>';
// print_r($allheader);
// echo '</pre>';

//session:
// - Lưu dữ liệu phía server
// - Làm việc thông qua session-id (cookie)

//1. Request đầu tiên --> Server tạo session-id --> Trả về cookie để trình duyệt lưu lại
//2. Nếu có quá trình lưu dữ liệu session --> lưu vào server tương ứng với session-id đã được tạo
//3. Request tiếp theo --> cookie (session-id) sẽ được gửi lên server --> server sẽ đọc nội dung session dựa vào id

session_save_path('./sessions');
session_start();
// $_SESSION['username'] = 'hoangan.web';

echo '<pre>';
print_r($_SESSION);
echo '</pre>';

// unset($_SESSION['username']);
