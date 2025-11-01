<?php
class User
{
    public function doSomething()
    {
        return 'doSomething';
    }

    final public function doSomething2()
    {
        return 'doSomething2';
    }
}

class Auth extends User
{
    public function doSomething2()
    {
        return 'Ok';
    }
}
