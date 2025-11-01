<?php
//magic method: __construct(), __destruct(), __get(), __set(),...

// class User
// {
//     private $name = "Hoàng An";
//     private $email = 'hoangan.web@gmail.com';
//     private $a;

//     public function __get($property)
//     {
//         //Khi truy cập vào thuộc tính private, protected --> Hàm __get sẽ chạy về tên thuộc tính được gọi
//         return $this->$property;
//     }

//     public function __set($property, $value)
//     {
//         //Khi cập nhật thuộc tính private, protected --> hàm __sẽ chạy và trả về tên thuộc tính, giá trị
//         $this->$property = $value;
//     }

//     public function __call($name, $arguments)
//     {
//         //Điều phối chung
//         // - Dựa vào tên
//         // - Đối số 
//         // --> Thực hiện gọi hàm
//         return $this->$name(...$arguments);
//     }

//     public static function __callStatic($name, $arguments)
//     {
//         return self::$name(...$arguments);
//     }

//     private static function getData($value)
//     {
//         return 'getData - ' . $value;
//     }

//     private function doSomething($a, $b)
//     {
//         return 'doSomething: ' . $a . ' - ' . $b;
//     }
// }

// class Calc
// {
//     private $result = null;
//     public static function start($value)
//     {
//         $instance = new self;
//         $instance->result = $value;
//         return $instance;
//     }
//     public function add($value)
//     {
//         $this->result += $value;
//         return $this;
//     }
//     public function minus($value)
//     {
//         $this->result -= $value;
//         return $this;
//     }
//     public function multi($value)
//     {
//         $this->result *= $value;
//         return $this;
//     }
//     public function divi($value)
//     {
//         $this->result /= $value;
//         return $this;
//     }

//     public function get()
//     {
//         return $this->result;
//     }
// }

// echo Calc::start(10)->add(10)->minus(2)->multi(2)->divi(3)->get();

class User
{
    private $query = [
        'from' => 'users'
    ];
    private $select = ["select" => '*'];
    private $where = [];
    private $orderBy = [];
    public static function __callStatic($name, $arguments)
    {
        //Khởi tạo instance
        $instance = new self;
        $instance->$name(...$arguments);
        return $instance;
    }
    public function __call($name, $arguments)
    {
        $this->$name(...$arguments);
        return $this;
    }
    public function get()
    {
        $sql = "";
        foreach ($this->select as $key => $value) {
            $sql .= "$key $value ";
        }
        foreach ($this->query as $key => $value) {
            $sql .= "$key $value ";
        }
        foreach ($this->where as $key => $value) {
            $sql .= "$key $value ";
        }
        foreach ($this->orderBy as $key => $value) {
            $sql .= "$key $value ";
        }
        return $sql;
    }
    private function where($name, $compare, $value)
    {
        $this->where['where'] = "$name $compare '$value'";
        return $this;
    }
    private function orderBy($sort, $order = 'asc')
    {
        $this->orderBy['order by'] = "$sort $order";
    }
    private function select(...$fields)
    {
        $this->select['select'] = implode(', ', $fields);
    }
}

echo User::orderBy('created_at', 'desc')->select('id', 'name', 'email')->where("id", ">", 3)->get();
