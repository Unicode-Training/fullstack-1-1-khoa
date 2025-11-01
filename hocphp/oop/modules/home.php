<?php

namespace Client;

// use \DateTime;

class Home
{
    public function __construct()
    {
        echo 'client home <br/>';
        $now = new \DateTime();
        var_dump($now);
    }
}
