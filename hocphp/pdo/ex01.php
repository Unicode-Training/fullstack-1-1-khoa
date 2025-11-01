<?php
//driver
$dsn = "mysql:dbname=php_khoa;host=localhost";
try {
    $pdo = new PDO($dsn, "root", "123456");
} catch (PDOException $e) {
    var_dump($e->getMessage());
}

//Insert
// $sql = "INSERT INTO users(name, email, password, created_at, updated_at) VALUES('User 3', 'user3@gmail.com', '123456', NOW(), NOW())";
// $statement = $pdo->prepare($sql);
// $status = $statement->execute();
// var_dump($status);

//fetchAll
// $sql = "SELECT * FROM users";
// $statement = $pdo->prepare($sql);
// $statement->execute();
// $users = $statement->fetchAll(PDO::FETCH_ASSOC);
// echo '<pre>';
// print_r($users);
// echo '</pre>';

//fetch
// $sql = "SELECT * FROM users WHERE id = 1";
// $statement = $pdo->prepare($sql);
// $statement->execute();
// $user = $statement->fetch(PDO::FETCH_ASSOC);
// echo '<pre>';
// print_r($user);
// echo '</pre>';

//update
// $sql = "UPDATE users SET name='User1 - Update', email='abc@gmail.com' WHERE id = 1";
// $statement = $pdo->prepare($sql);
// $statement->execute();
// $status = $statement->execute();
// var_dump($status);

//delete
$sql = "DELETE FROM users WHERE id = 1";
$statement = $pdo->prepare($sql);
$statement->execute();
$status = $statement->execute();
var_dump($status);
