<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\UserService;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // $status = $request->query('status');
        // $status = $request->status;
        // $status = $request->input('status');
        // return $status;
        // $category = $request->category;
        // $category = $request->query('category');
        // return $category;
        // $apiKey = $request->header('x-api-key');
        // return $apiKey;

        // return response()->json([
        //     'User 1',
        //     'User 2',
        //     'User 3',
        // ], 404, [
        //     'X-Test-Header' => 'Value'
        // ]);

        $userService = new UserService();
        return $userService->getAll();
    }

    public function show($id)
    {
        return 'User ' . $id;
    }

    public function store(Request $request)
    {
        // $name = $request->name;
        // $email = $request->email;
        // $name = $request->input('name');
        // $email = $request->input('email');

        // $body = $request->all();
        // $emailFromUrl = $request->query('email');
        // return [
        //     $body,
        //     $emailFromUrl
        // ];

        // return [
        //     'name' => $name,
        //     'email' => $email,
        // ];

        $body = $request->validate([
            'name' => [
                'required',
                'min:3',
                function ($attribute, $value, $fail) {
                    if ($value != mb_strtoupper($value)) {
                        $fail(":attribute phải viết hoa");
                    }
                }
            ],
            'email' => 'required|email'
        ], [
            'required' => ':attribute bắt buộc phải nhập',
            'min' => ':attribute phải nhất lớn nhất :min ký tự',
            'email' => ":attribute không đúng định dạng"
        ], [
            'name' => "Tên",
            'email' => "Email",
        ]);
        return $body;
    }
}
