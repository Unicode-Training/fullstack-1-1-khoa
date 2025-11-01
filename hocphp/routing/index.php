<?php
require './routes.php';
require './utils/functions.php';
$path = $_SERVER['PATH_INFO'] ?? "/";
foreach ($routes as $key => $value) {
    $modulePath = './modules/' . $value . '.php';
    $pattern = "~^$key$~";
    $pattern = preg_replace('~:.{1,}~', '.{1,}~', $pattern);
    if (preg_match($pattern, $path)) {
        $pos = strpos($key, ':');
        if ($pos !== false) {
            $paramName = substr($key, $pos + 1);
            $prefixPath = str_replace(":$paramName", "", $key);
            $paramValue = str_replace($prefixPath, '', $path);
            $paramsData[$paramName] = $paramValue;
        }
        require $modulePath;
    }
}

// // --> /products/1
// // --> /products/:productId

//Regex = Biểu thức chính quy
// - Khớp 2 chuỗi: 
// $str = "/ta/hoangan/fdsd";
// $pattern = "~/^hoangan/.{1,}$~";
// $result = preg_match($pattern, $str);
// var_dump($result);
