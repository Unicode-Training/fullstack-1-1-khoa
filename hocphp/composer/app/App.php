<?php

namespace App;

use App\Controllers\ProductController;
use App\Home;
use Session;

class App
{
    public function run()
    {
        echo 'Hello World <br/>';
        $home = new Home();
        echo '<br/>';
        $product = new ProductController();
        $product->index();
        echo '<br/>';
        getMessage();
        echo '<br/>';
        Session::start();
    }
}
