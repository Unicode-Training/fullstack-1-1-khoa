<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function getAll($filters = [], $sort = [], $select, $limit, $offset, $paginate, $includes, $limitRelations)
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
        $relations = [];
        if ($includes) {
            $relations = explode(',', $includes);
        }
        if ($limitRelations) {
            $keys = array_keys($limitRelations);

            if (!empty($keys[0])) {
                foreach ($relations as $index => $relation) {
                    if ($relation == $keys[0]) {
                        unset($relations[$index]);
                        break;
                    }
                }
                $relations[$keys[0]] = function ($q) use ($keys, $limitRelations) {
                    $value = $limitRelations[$keys[0]];
                    $q->limit($value);
                };
            }
        }

        $query = User::with($relations);
        if (!empty($filters['status'])) {
            $status = $filters['status'] == 'active' ? 1 : 0;
            $query->where('status', $status);
        }
        if (!empty($filters['keyword'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('name', 'like', '%' . $filters['keyword'] . '%')
                    ->orWhere('email', 'like', '%' . $filters['keyword'] . '%')
                    ->orWhereRelation('phone', 'phone', 'like', '%' . $filters['keyword'] . '%');
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
            $users = $query->paginate($limit ?? 10);
        }

        $users = $query->get();

        // foreach ($users as $user) {
        //     $user->phone;
        // }
        return $users;
    }

    public function create($body)
    {

        $body['password'] = Hash::make($body['password']);
        $user =  User::create($body);
        if (!empty($body['phone'])) {
            $user->phone()->create([
                'phone' => $body['phone']
            ]);
        }
        $user->phone =  $body['phone'];
        return $user;
    }

    public function update($body, $id)
    {
        $phone = null;
        if (!empty($body['phone'])) {
            $phone = $body['phone'];
        }
        unset($body['phone']);
        User::where('id', $id)->update($body);
        $user = User::find($id); //Lấy bản ghi theo khóa chính
        if ($phone) {
            $user->phone->update([
                'phone' => $phone
            ]);
        }
        return $user;
    }

    public function delete($id)
    {
        $data = User::find($id);
        $data->phone->delete(); //Xóa record bên bảng phone
        User::where('id', $id)->delete();
        return $data;
    }

    public function getOne($id)
    {
        $user =  User::find($id);
        // $user->phone;
        return $user;
    }

    public function getUsersByCourse($course)
    {
        return $course->users;
    }
}
