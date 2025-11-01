<?php
//Interface: Bản hợp đồng thông báo cho các class biết là nó cần phải định nghĩa các phương thức, thuộc tính nào --> Chặt chẽ hơn
// interface Query
// {
//     public function getQuery();
// }
// interface Model
// {
//     public function getModel();
// }
// interface AuthInterface
// {
//     public const MSG = "Demo msg";
//     public function login();
//     public function register();
// }
// interface UserInterface extends Query, Model
// {
//     public function getUser();
// }
// class Auth implements AuthInterface, UserInterface
// {
//     public function login()
//     {
//         return 'login success';
//     }
//     public function register()
//     {
//         return 'register success';
//     }
//     public function getUser()
//     {
//         return 'get user success';
//     }
//     public function getQuery()
//     {
//         return 'get query success';
//     }
//     public function getModel()
//     {
//         return 'get model success';
//     }
// }
// $auth = new Auth();
// echo $auth::MSG;
