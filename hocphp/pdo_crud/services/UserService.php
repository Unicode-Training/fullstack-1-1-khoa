<?php
require $_SERVER['DOCUMENT_ROOT'] . '/pdo_crud/classes/Database.php';
class UserService
{
    private $db;
    public function __construct()
    {
        $this->db = new Database();
    }

    public function getAllUsers($filters = [])
    {
        $sql = "SELECT * FROM users";
        $data = [];
        $operator = "WHERE";
        if (isset($filters['search'])) {
            if (strpos($sql, 'WHERE') !== false) {
                $operator = "AND";
            }
            $sql .= " $operator (name LIKE :search OR email LIKE :search)";
            $data['search'] = '%' . $filters['search'] . '%';
        }

        if (isset($filters['status'])) {
            if (strpos($sql, 'WHERE') !== false) {
                $operator = "AND";
            }
            $sql .= " $operator status=:status";
            $data['status'] = $filters['status'] == 'active' ? 1 : 0;
        }

        return $this->db->fetchAll($sql, $data);
    }

    public function createUser($userData)
    {
        $sql = "INSERT INTO users(name, email, password, status, created_at, updated_at) VALUES(:name, :email, :password, :status, NOW(), NOW())";
        return $this->db->query($sql, $userData);
    }

    public function deleteUser($userId)
    {
        $sql = "DELETE FROM users WHERE id = :id";
        return $this->db->query($sql, ['id' => $userId]);
    }
}

//Sql Injection