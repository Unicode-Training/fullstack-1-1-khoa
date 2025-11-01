<?php
class Database
{
    private $driver = "mysql";
    private $host = "localhost";
    private $dbname = "php_khoa";
    private $username = "root";
    private $password = "123456";
    private $port = 3306;
    private $pdo; //Chứa đối tượng kết nối

    public function __construct()
    {
        try {
            $dsn = "$this->driver:dbname=$this->dbname;host=$this->host;port=$this->port";
            if (!$this->pdo) {
                $this->pdo = new PDO($dsn, $this->username, $this->password);
            }
        } catch (PDOException $e) {
            var_dump($e->getMessage());
        }
    }

    public function query($sql, $data = [])
    {
        $statement = $this->pdo->prepare($sql);
        $statement->execute($data);
        return $statement;
    }

    public function fetchAll($sql, $data)
    {
        $query = $this->query($sql, $data);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function fetch($sql, $data)
    {
        $query = $this->query($sql, $data);
        return $query->fetch(PDO::FETCH_ASSOC);
    }
}
