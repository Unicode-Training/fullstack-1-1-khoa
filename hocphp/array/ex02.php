<?php
//Các hàm xử lý

//1. array_keys() --> Trả về 1 mảng chứa các key
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'name' => 'Hoàng An'
// ];
// echo '<pre>';
// print_r(array_keys($myArr));
// echo '</pre>';

//2. array_values() --> Trả về 1 mảng mới chứa các value (Sắp xếp lại key)
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'name' => 'Hoàng An'
// ];
// echo '<pre>';
// print_r(array_values($myArr));
// echo '</pre>';

//3. in_array() --> Tìm phần tử có trong mảng hay không?
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4'
// ];
// var_dump(in_array('Item 2', $myArr));

//3. array_search() --> Tìm phần tử trong mảng, trả về key
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// echo array_search('Item 2', $myArr);

//4. array_reverse() --> Đảo ngược mảng
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// $newArr = array_reverse($myArr);
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//5. array_slice() --> Cắt mảng theo index
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// echo '<pre>';
// print_r(array_slice($myArr, 1, 2));
// echo '</pre>';

//6. array_push()
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// array_push($myArr, 'Khoa', ['email' => 'hoangan.web@gmail.com']);

// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//7. array_unshift();
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// array_unshift($myArr, 'Khoa', 'Tùng');
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//8. array_pop(): Xóa phần tử cuối của mảng
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// array_pop($myArr);
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//9. array_shift()
// $myArr = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 2',
//     'name' => 'Hoàng An'
// ];
// array_shift($myArr);
// echo '<pre>';
// print_r($myArr);
// echo '</pre>';

//10. array_merge()
// $arr1 = ['Item 1', 'Item 2', 'Item 3', 'name' => 'Hoàng An'];
// $arr2 = [1, 2, 3];
// $newArr = array_merge($arr1, $arr2);
// echo '<pre>';
// print_r($newArr);
// echo '</pre>';

//11. end(): Lấy phần tử cuối mảng
// $user = [
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',
//     'age' => 33
// ];
// echo '<pre>';
// print_r($user);
// echo '</pre>';
// echo end($user);

//12.reset(): Lấy phần tử đầu mảng
// $user = [
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',
//     'age' => 33
// ];
// echo '<pre>';
// print_r($user);
// echo '</pre>';
// echo reset($user);

//13. sort(): Sắp xếp mảng theo thứ tự tăng dần
// $users = ['Tùng', 'Dũng', 'An', 'Vương'];
// sort($users);
// echo '<pre>';
// print_r($users);
// echo '</pre>';

// $numbers = [5, 2, 9, 1, 8, 10];
// sort($numbers);
// echo '<pre>';
// print_r($numbers);
// echo '</pre>';

//14. usort(): Sắp xếp mảng theo điều kiện
// $users = ['Tùng', 'Dũng', 'An', 'Vương'];
//Nếu return về số dương --> Đổi chỗ a, b
// usort($users, function ($a, $b) {
//     if ($b > $a) {
//         return 1;
//     }
//     return -1;
// });
// echo '<pre>';
// print_r($users);
// echo '</pre>';

//15. array_filter()
// $numbers = [1, 2, 3, 4, 5, 6, 7];
// $result = array_filter($numbers, function ($value) {
//     return $value % 2 == 0;
// });
// echo '<pre>';
// print_r($result);
// echo '</pre>';

//16. array_map()
// $numbers = [1, 2, 3, 4, 5, 6, 7];
// $result = array_map(function ($value) {
//     return "<h3>" . $value . "</h3>";
// }, $numbers);
// echo '<pre>';
// print_r($result);
// echo '</pre>';

//17. array_find()
// $users = [
//     'Tuan Anh',
//     'Dat',
//     'An',
//     'Dung'
// ];
// $result = array_find($users, function ($value) {
//     return strpos($value, 'an') !== false;
// });
// echo $result;

//Bài tập: Cho trước mảng dưới đây
$users = [
    [
        'id' => 1,
        'name' => 'User 1',
        'age' => 20
    ],
    [
        'id' => 2,
        'name' => 'User 2',
        'age' => 25
    ],
    [
        'id' => 3,
        'name' => 'User 3',
        'age' => 28
    ],
    [
        'id' => 4,
        'name' => 'User 4',
        'age' => 23
    ]
];
echo '<pre>';
print_r($users);
echo '</pre>';
//Yêu cầu:
// - Tạo mảng mới chứa các users có tuổi từ 25 trở lên
// - Sắp xếp users theo thứ tự tuổi tăng dần

//Gợi ý; 
// - Tạo mảng mới: $result = []
// - Duyệt qua từng của mảng $users: Dùng foreach
// - Thêm các phần tử đạt điều kiện vào $result
// $result = array_filter($users, fn($value) => $value['age'] >= 25);
// echo '<pre>';
// print_r($result);
// echo '</pre>';
