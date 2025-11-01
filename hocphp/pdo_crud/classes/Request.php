<?php
class Request
{
    public function query($name = null)
    {
        $data = filter_input_array(INPUT_GET);
        if ($name) {
            return $data[$name] ?? null;
        }
        return $data;
    }

    public function body()
    {
        $method = $this->getMethod();
        $contentType = $this->getContentType();
        if ($method == 'post') {
            if ($contentType === "application/json") {
                $data = json_decode(file_get_contents("php://input"), true);
            } else {
                $data = filter_input_array(INPUT_POST);
            }
            return $data;
        }

        if ($method == 'put' || $method == "patch" || $method == "delete") {
            if ($contentType == "application/json") {
                $data = json_decode(file_get_contents("php://input"), true);
                return $data;
            }
            if ($contentType == "application/x-www-form-urlencoded") {
                parse_str(file_get_contents("php://input"), $data);
                return $data;
            }
        }
    }

    public function headers($key = null)
    {
        $headerList = getallheaders();
        if ($key) {
            return $headerList[$key];
        }
        return $headerList;
    }

    private function getContentType()
    {
        return $_SERVER['CONTENT_TYPE'] ?? null;
    }

    public function getMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }
}
