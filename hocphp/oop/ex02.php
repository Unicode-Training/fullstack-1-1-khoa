<?php
//Kế thừa: Tái sử dụng lại các phương thức, thuộc tính của class khác
class Person
{
    protected $name = null;
    protected $email = null;

    public function __construct($name, $email)
    {
        $this->name = $name;
        $this->email = $email;
    }

    public function doSomething()
    {
        return 'Do something';
    }

    public function handler()
    {
        return $this->hanlderChildren();
    }
}

class Boy extends Person
{
    public $age = null;
    public function __construct($name, $email, $age)
    {
        parent::__construct($name, $email); //Gọi constructor của class cha
        $this->age = $age;
    }
    public function getInfo()
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'age' => $this->age
        ];
    }

    public function doSomething()
    {
        return 'override doSomething';
    }

    public function hanlderChildren()
    {
        return 'hanlderChildren';
    }
}
$boy = new Boy("Hoàng An", "hoangan.web@gmail.com", 33);
echo $boy->handler();
