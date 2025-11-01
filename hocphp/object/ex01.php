<?php
//Tạo object trong php
// 1. Tạo mảng --> Chuyển sang object
// 2. Dùng stdClass

// $user = (object)[
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',

// ];
// echo '<pre>';
// print_r($user);
// echo '</pre>';

// echo $user->name . '<br/>';
// echo $user->email . '<br/>';

// $user = new stdClass();
// $user->name = 'Hoàng An Unicode';
// $user->email = 'hoangan.web@gmail.com';

// echo $user->name . '<br/>';

//Bài tập: Chuyển các mảng con thành object
// $users = [
//     [
//         'id' => 1,
//         'name' => 'User 1',
//         'age' => 20
//     ],
//     [
//         'id' => 2,
//         'name' => 'User 2',
//         'age' => 25
//     ],
//     [
//         'id' => 3,
//         'name' => 'User 3',
//         'age' => 28
//     ],
//     [
//         'id' => 4,
//         'name' => 'User 4',
//         'age' => 23
//     ]
// ];
// $orders = [
//     (object)[
//         'userId' => 1,
//         'total' => 1000
//     ],
//     (object)[
//         'userId' => 1,
//         'total' => 1000
//     ],
//     (object)[
//         'userId' => 2,
//         'total' => 1500
//     ],
//     (object)[
//         'userId' => 3,
//         'total' => 2000
//     ]
// ];

// $users = array_map(function ($value) use ($orders) {
//     $value = (object)$value;
//     $total = array_reduce($orders, function ($acc, $item) use ($value) {
//         if ($value->id == $item->userId) {
//             $acc += $item->total;
//         }
//         return $acc;
//     }, 0);
//     $value->total = $total;
//     return $value;
// }, $users);
// echo '<pre>';
// print_r($users);
// echo '</pre>';

// $customer = new stdClass();
// $customer->info = new stdClass();
// $customer->info->name = 'Hoàng An';
// $customer->info->email = 'hoangan.web@gmail.com';

// echo '<pre>';
// print_r($customer);
// echo '</pre>';

// echo $customer->info->name . '<br/>';
// if (isset($customer->info->email)) {
//     echo $customer->info->email;
// }

// $customer = null;
// echo $customer?->name; //null safe operator
