<?php
//Traits
// trait BaseQuery
// {
//     private $baseOutput = 'baseOutput';
// }
// trait Builder
// {
//     private $name = null;
//     private $email = 'hoangan.web@gmail.com';
//     public function __construct($name)
//     {
//         $this->name = $name;
//     }
// }
// trait Query
// {
//     use BaseQuery;
//     private $output = 'Ok chưa?';
// }
// class User
// {
//     //Gọi trait
//     use Builder;
//     use Query;

//     public function showInfo()
//     {
//         return [
//             'name' => $this->name,
//             'email' => $this->email,
//             'output' => $this->output,
//             'baseOutput' => $this->baseOutput
//         ];
//     }
// }
// $user = new User("Hoàng An Unicode");
// echo '<pre>';
// print_r($user->showInfo());
// echo '</pre>';
