<?php
require '../classes/Request.php';
require '../classes/Response.php';
require '../services/UserService.php';
require '../classes/Session.php';
Session::start();
$userService = new UserService();
$request = new Request();
$response = new Response();
$id = $request->query('id');
if ($request->getMethod() == 'post' && $id) {
    $body = $request->body();
    $userData = [
        'name' => $body['name'],
        'email' => $body['email'],
        'status' => isset($body['status']) && $body['status'] == 'active' ? 1 : 0,
    ];
    $userService->updateUser($userData, $id);
    Session::set('message', 'User updated successfully.');
    $response->redirect('/pdo_crud');
}
