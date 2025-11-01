<?php
//String
$str = 'Học lập trình PHP không PHP khó';

//Duyệt từng ký tự
// for ($i = 0; $i < mb_strlen($str, 'UTF-8'); $i++) {
//     // $char = $str[$i];
//     $char = mb_substr($str, $i, 1, 'UTF-8');
//     echo $char . '<br/>';
// }

//Lấy độ dài chuỗi
// echo strlen($str); //Không hỗ trợ Tiếng Việt

//Để hỗ trợ Tiếng Việt thông qua các hàm của mbstring extension (mb_)
// echo mb_strlen($str, 'UTF-8');

//Lấy vị trí của chuỗi con trong chuỗi cha
// echo mb_strpos($str, 'PHP', 0, 'UTF-8'); //Vị trí đầu
// echo mb_strripos($str, 'PHP', 0, 'UTF-8'); //Vị trí cuối

//Thay thế
// echo str_replace('PHP', 'JavaScript', $str);

//Lặp chuỗi
// echo str_repeat('*', 20);

//Cắt bỏ nội dung đầu và cuối chuỗi
// $str = '  HOÀNG AN ';
// $output = trim($str);
// var_dump($output);

// $url = "/abc/";
// $output = trim($url, '/');
// echo $output;

//Chuyển thành chữ hoa
// echo mb_strtoupper($str, 'UTF-8');

//Chuyển thành chữ thường
// echo mb_strtolower($str, 'UTF-8');

//Chuyển ký tự đầu tiên thành chữ hoa
// $fullname = 'ân hoàng an';
// function custom_ucfirst($str)
// {
//     $firstChar = mb_substr($str, 0, 1, 'UTF-8');
//     $firstChar = mb_strtoupper($firstChar, 'UTF-8');
//     $lastString = mb_substr($str, 1, null, 'UTF-8');
//     return $firstChar . $lastString;
// }
// echo custom_ucfirst($fullname, 'UTF-8');

//Chuyển ký tự đầu của mỗi từ thành chữ hoa
// $fullname = 'tạ hoàng an';
// echo ucwords($fullname);

//Tách chuỗi thành mảng
$fullname = 'Tạ Hoàng An';
$arr = explode(' ', $fullname);
echo '<pre>';
print_r($arr);
echo '</pre>';
