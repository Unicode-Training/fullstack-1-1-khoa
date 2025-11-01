<?php
//Biến
// $fullname = 'Hoàng An';
// $age = 33;
// echo $fullname . '<br/>';
// echo $age . '<br/>';

//Hằng số
// const WEB_PATH = '/demo';
// echo WEB_PATH;

// define('WEB_PATH', '/demo');
// echo WEB_PATH;

//Toán tử: 
// +, -, *, /, ++, --
// >, <, >=, <=, ==, ===, !=, !==,
// &&, ||, !
// ??

// $a = 1;
// $b = $a ?? 'Hello';
// echo $b;

//Truthy, Falsy
//- Falsy: "", 0, null, false, []

// $a = "0";
// if ($a) {
//     echo 'Đúng';
// } else {
//     echo 'Sai';
// }

//Kiểm tra biến tồn tại --> Dùng hàm isset()
// $a = "";
// if (isset($a) && $a) {
//     echo $a;
//     echo 'ok';
// }

//if else, switch case, for, while, do while

//function
// function getMessage($msg, $status = 'success')
// {
//     echo 'Xin chào PHP: ' . $msg . '<br/>';
//     echo $status;
// }
// getMessage("Unicode");

//expression function
// $getMessage = function () {
//     echo "Xin chào PHP";
// };
// $getMessage();

//arrow function
// $sum = fn($a, $b) => $a + $b;
// echo $sum(20, 30);

//Biến toàn cục
//Biến cục bộ
// $data = 'Xin chào Unicode';
// function doSomething()
// {
//     global $data;
//     echo $data;
// }
// function updateData($value)
// {
//     global $data;
//     $data = $value;
// }
// updateData("Hoàng An");
// doSomething();

//Tham chiếu

//Tham trị

// $a = 10;
// $b = &$a;
// $b = 20;
// echo 'a = ' . $a . '<br/>';
// echo 'b = ' . $b . '<br/>';

//Áp dụng tham chiếu, tham trị vào hàm
// function addData(&$data, $value)
// {
//     $data .= $value;
// }
// $data = "";
// addData($data, "Value 1");
// addData($data, "Value 2");
// echo $data;

// function display($a, $callback)
// {
//     // var_dump($a);
//     // var_dump($callback);
//     echo $a . '<br/>';
//     if ($callback instanceof Closure) {
//         $callback();
//     }
// }
// $b = 100;
// display(10, function () {
//     global $b;
//     echo 'Xin chào callback <br/>';
//     echo $b;
// });

//Closure function
$a = 10;
function display()
{
    // global $a;
    // $b = 20;
    // return function () use ($b) {
    //     global $a;
    //     echo 'a = ' . $a . '<br/>';
    //     echo 'b = ' . $b . '<br/>';
    // };
    $data = 'Unicode';
    // function showMessage()
    // {

    //     echo 'Ok chưa?';
    // }
    $showMessage = function () use ($data) {
        echo 'Ok chưa?';
        echo $data;
    };
    $showMessage();
}
$func = display();
// $func();
