<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\UserService;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function index(Request $request)
    {
        //?email=user2&status=active
        //- Tìm email theo like '%user2%'
        //- Tìm status theo = 
        $filters = $request->only(['keyword', 'status']);
        $sort = $request->only(['sort', 'order']);
        $select = $request->query('select');
        $limit = $request->query('limit');
        $offset = $request->query('offset');
        $paginate = $request->query('paginate');
        $includes = $request->query('includes');
        $limitRelations = $request->query('limit-relations');

        // \DB::enableQueryLog();
        return $this->userService->getAll($filters, $sort, $select, $limit, $offset, $paginate, $includes, $limitRelations);
        // return \DB::getQueryLog();
    }

    public function show($id)
    {
        // \DB::enableQueryLog();
        $data = $this->userService->getOne($id);
        if (!$data) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy bản ghi nây'
            ], 404);
        }
        // return \DB::getQueryLog();
        return $data;
    }

    public function store(Request $request)
    {

        //Validate
        $body = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ], [
            'required' => ':attribute bắt buộc phải nhập',
            'email' => ':attribute không đúng định dạng',
            'unique' => ':attribute đã tồn tại',
            'min' => ':attribute phải từ :min ký tự'
        ], [
            'name' => 'Tên',
            'email' => 'Email',
            'password' => "Mật khẩu"
        ]);
        if ($request->phone) {
            $body['phone'] = $request->phone;
        }
        return $this->userService->create($body);
    }

    public function update(Request $request, $id)
    {
        //Validate
        $body = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
        ], [
            'required' => ':attribute bắt buộc phải nhập',
            'email' => ':attribute không đúng định dạng',
            'unique' => ':attribute đã tồn tại',
        ], [
            'name' => 'Tên',
            'email' => 'Email',
        ]);
        if ($request->phone) {
            $body['phone'] = $request->phone;
        }
        return $this->userService->update($body, $id);
    }

    public function delete($id)
    {
        return $this->userService->delete($id);
    }
}
