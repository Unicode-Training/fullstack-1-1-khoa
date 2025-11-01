<?php
class Response
{
    public function json($data, $status = 200)
    {
        header("Content-Type: application/json");
        http_response_code($status);
        return json_encode($data);
    }
    public function header($key, $value)
    {
        header("$key: $value");
        return $this;
    }
    public function status($value)
    {
        http_response_code($value);
        return $this;
    }

    public function redirect($url)
    {
        header("Location: $url");
        exit;
    }

    public function download($filename)
    {
        $this
            ->header("Content-Description", "File Transfer")
            ->header('Content-Type', 'application/octet-stream')
            ->header('Content-Disposition', 'attachment; filename=' . $filename)
            ->header('Content-Transfer-Encoding', 'binary');
    }
}
