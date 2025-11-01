<?php
//Abstract class, abstract method
// abstract class Model
// {
//     protected $name = null;
//     protected $table = null;
//     public function __construct($name, $table)
//     {
//         $this->name = $name;
//         $this->table = $table;
//     }
//     public function getTable()
//     {
//         return $this->table;
//     }
//     public function getName()
//     {
//         return $this->name;
//     }
//     abstract public function notify(); //Khai báo tên
// }
// class User extends Model
// {
//     public function notify()
//     {
//         return 'Đã gửi thông báo user';
//     }
// }
// class Product extends Model
// {
//     public function notify()
//     {
//         return 'Đã gửi thông báo product';
//     }
// }
// $user = new User('Hoàng An', 'users');

// echo $user->notify() . '<br/>';

// $product = new Product('Sản phẩm 1', 'products');
// echo $product->notify();
