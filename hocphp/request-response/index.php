<?php
//http request
//$_SERVER --> Trả về thông tin request
// echo '<pre>';
// print_r($_SERVER);
// echo '</pre>';

// $queryString = $_SERVER['QUERY_STRING'];
// echo $queryString;

//$_GET --> Lấy query string (Bóc tách theo từng key)
// echo '<pre>';
// print_r($_GET);
// echo '</pre>';

// $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
// $keyword = filter_input(INPUT_GET, 'keyword', FILTER_SANITIZE_SPECIAL_CHARS);
// $category = filter_input_array(INPUT_GET)['category'];
// echo $keyword;

// $name = filter_input(INPUT_POST, 'name');
// $email = filter_input(INPUT_POST, 'email');
// echo $email;

//Muốn đọc dữ liệu từ json --> dùng hàm file_get_contents để đọc từ php://input

// if ($_SERVER['CONTENT_TYPE'] == "application/json") {
//     $body = file_get_contents("php://input"); //json
//     $body = json_decode($body, true);
// } else {
//     $body = filter_input_array(INPUT_POST);
// }
// echo '<pre>';
// print_r($body);
// echo '</pre>';

// $body = file_get_contents("php://input"); //json
// $body = json_decode($body, true);
// echo '<pre>';
// print_r($body);
// echo '</pre>';

//Viết hàm xử lý lấy body với các HTTP METHOD
// - GET
// - POST
// - PUT
// - PATCH
// - DELETE
require './request.php';
require './response.php';
$request = new Request();

// $query = $request->query('category');
// $body = $request->body();
// echo '<pre>';
// print_r($body);
// echo '</pre>';

// $headers = $request->headers("x-api-key");
// echo '<pre>';
// print_r($headers);
// echo '</pre>';

$response = new Response();
// echo $response
//     ->header('x-api', '123')
//     ->header(
//         'x-message',
//         'success'
//     )->json([
//         'name' => 'Hoàng An'
//     ], 404);

// $response->header('Content-Type', 'plain/text')->status(400);

// $response->redirect("/oop/ex06.php");

if ($_SERVER['PATH_INFO'] === "/download") {
    $url = $request->query('url');
    $image = file_get_contents($url);
    $response->download(time() . '.png');
    echo $image;
}
