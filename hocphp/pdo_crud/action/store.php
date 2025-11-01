<?php
require '../classes/Request.php';
require '../classes/Response.php';
require '../services/UserService.php';
require '../classes/Session.php';
Session::start();
$userService = new UserService();
$request = new Request();
$response = new Response();
if ($request->getMethod() == 'post') {
    $body = $request->body();
    $userData = [
        'name' => $body['name'],
        'email' => $body['email'],
        'password' => password_hash($body['password'], PASSWORD_DEFAULT),
        'status' => isset($body['status']) && $body['status'] == 'active' ? 1 : 0,
    ];
    $userService->createUser($userData);
    Session::set('message', 'User created successfully.');
    $response->redirect('/pdo_crud');
}
