<?php
//Khai báo mảng
// $myArr = ['Item 1', 'Item 2', 'Item 3'];
// $myArr[] = 'Item 4';

//Cập nhật phần tử mảng
// $myArr[1] = 'Ahihi';

//Xóa phần tử mảng
// unset($myArr[1]);
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//Truy cập vào phần tử mảng
// echo $myArr[1];

//Duyệt mảng
// foreach ($myArr as $index => $value) {
//     echo $value . ' ' . $index . '<br/>';
// }

// foreach ($myArr as $value) {
//     echo $value . '<br/>';
// }

//Đếm số lượng phần tử mảng
// echo count($myArr);

//Kiểm tra mảng
// var_dump(is_array($myArr));

//array associative --> key không phải là số
// $myArr = [
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',
//     'Khoa'
// ];
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

// // echo $myArr['name'];
// foreach ($myArr as $key => $value) {
//     echo $key . '<br/>';
//     echo $value . '<br/>';
// }

// $users = [
//     [
//         'name' => 'Hoàng An',
//         'email' => 'hoangan.web@gmail.com'
//     ],
//     [
//         'name' => 'Hoàng An 1',
//         'email' => 'hoangan.web1@gmail.com'
//     ],
//     [
//         'name' => 'Hoàng An 2',
//         'email' => 'hoangan.web2@gmail.com'
//     ]
// ];
// echo '<pre>';
// print_r($users);
// echo '</pre>';
// echo $users[1]['name'];

//Ví dụ: Lấy tất cả số chẵn và lưu vào 1 mảng mới
$numbers = [10, 15, 8, 2, 9, 1];
$results = [];
foreach ($numbers as $value) {
    if ($value % 2 === 0) {
        $results[] = $value;
    }
}
echo '<pre>';
print_r($results);
echo '</pre>';
