<?php
// class User
// {
//     //Thuộc tính
//     //<phạm vi> <tenthuoctinh> = <giatri>
//     public $name;
//     public $email;
//     private $age;
//     protected $income;

//     static public $message = 'Học PHP không khó';

//     //Hằng số
//     public const PER_PAGE = 10;

//     //Phương thức khởi tạo
//     public function __construct($name, $email, $age, $income)
//     {
//         echo 'Phương thức khởi tạo <br/>';
//         $this->name = $name;
//         $this->email = $email;
//         $this->age = $age;
//         $this->income = $income;
//     }

//     //Phương thức
//     public function getName()
//     {
//         return $this->name;
//     }

//     public function getEmail()
//     {
//         return $this->email;
//     }

//     public function getAge()
//     {
//         return $this->age;
//     }

//     public function getIncome()
//     {
//         return $this->income;
//     }

//     public function __destruct()
//     {
//         echo 'Phương thức hủy';
//     }

//     public function getPerPage()
//     {
//         return self::PER_PAGE;
//     }

//     //Phương thức static
//     static public function doSomething()
//     {
//         // return 'Ahihi';
//         // $a = self::class;
//         // var_dump($a);
//         return self::$message;
//     }
// }
// $user = new User('Hoàng An', 'hoangan.web@gmail.com', 33, 1000);
// echo $user->getPerPage() . '<br/>';
// echo $user::PER_PAGE;
// echo $user->name . '<br/>';
// echo $user->getName() . '<br/>';
// echo $user->getEmail() . '<br/>';
// echo $user->getAge() . '<br/>';
// echo $user->getIncome() . '<br/>';
// echo User::doSomething();
// echo User::$message;
// echo User::PER_PAGE . '<br/>';
