<?php
//namespace
require './modules/home.php';
require './modules/admin/home.php';

use Client\Home as ClientHome;
use Admin\Abc\Home as AdminHome;

$client = new ClientHome;
$admin = new AdminHome;
