<?php
require '../../services/UserService.php';
require '../../classes/Request.php';
require '../../classes/Response.php';

$userService = new UserService();
$request = new Request();
$response = new Response();

$searchTerm = '';
if ($request->query('search')) {
    $searchTerm = $request->query('search');
}
if ($request->query('status') && in_array($request->query('status'), ['active', 'inactive'])) {
    $status = $request->query('status');
}
$page = $request->query('page') ?? 1;
$allUsers = $userService->getAllUsers([
    'search' => $searchTerm,
    'status' => $status ?? null
], $page);
$users = $allUsers['data'];
$count = $allUsers['count'];

//Tính số trang
$maxPage = ceil($count / 3);

echo $response->json([
    'data' => $users,
    'count' => $count,
    'maxPage' => $maxPage,
    'message' => "Get all users successfully",
    'success' => true
]);
