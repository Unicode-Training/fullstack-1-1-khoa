<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function getAll($filters = [], $sort = [], $select, $limit, $offset, $paginate)
    {
        // $filterData = [];
        // if (!empty($filters['email'])) {
        //     $filterData[] = [
        //         'email',
        //         'like',
        //         '%' . $filters['email'] . '%'
        //     ];
        // }
        // if (!empty($filters['status'])) {
        //     $filterData[] = [
        //         'status',
        //         '=',
        //         $filters['status'] == 'active' ? 1 : 0
        //     ];
        // }
        // $users = User::where($filterData)->orWhere('id', 1)->get();
        $query = User::query();
        if (!empty($filters['status'])) {
            $status = $filters['status'] == 'active' ? 1 : 0;
            $query->where('status', $status);
        }
        if (!empty($filters['keyword'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('name', 'like', '%' . $filters['keyword'] . '%')
                    ->orWhere('email', 'like', '%' . $filters['keyword'] . '%');
            });
        }

        $sortField = $sort['sort'] ?? 'id';
        $sortOrder = $sort['order'] ?? 'asc';

        if ($select) {
            $selectData = explode(',', $select);
            $query->select($selectData);
        }

        if ($limit) {
            $query->limit($limit);
        }

        if ($offset) {
            $query->offset($offset);
        }

        $query->orderBy($sortField, $sortOrder);

        if ($paginate == 'true') {
            return $query->paginate($limit ?? 10);
        }

        //SELECT * FROM users WHERE status = 1 AND (name like '%tukhoa%' OR email like '%tukhoa%')
        return $query->get();
    }

    public function create($user)
    {
        $user['password'] = Hash::make($user['password']);
        return User::create($user);
    }

    public function update($user, $id)
    {
        User::where('id', $id)->update($user);
        return User::find($id); //Lấy bản ghi theo khóa chính
    }

    public function delete($id)
    {
        $data = User::find($id);
        User::where('id', $id)->delete();
        return $data;
    }

    public function getOne($id)
    {
        return User::find($id);
    }
}
