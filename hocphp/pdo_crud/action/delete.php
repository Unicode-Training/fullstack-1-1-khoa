<?php
require '../classes/Request.php';
require '../classes/Response.php';
require '../classes/Session.php';
require '../services/UserService.php';
Session::start();
$userService = new UserService();
$request = new Request();
$response = new Response();
if ($request->query(('id'))) {
    $userId = $request->query('id');
    $userService->deleteUser($userId);
    Session::set('message', 'User deleted successfully.');
    $response->redirect('/pdo_crud');
}
