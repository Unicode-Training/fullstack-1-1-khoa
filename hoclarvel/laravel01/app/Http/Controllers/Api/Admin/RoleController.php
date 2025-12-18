<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Services\RoleService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    private $roleService;
    public function __construct(RoleService $roleService)
    {
        $this->roleService = $roleService;
    }
    public function index(Request $request)
    {
        return $this->roleService->getAll($request);
    }

    public function create(Request $request)
    {
        $body = $request->validate([
            'name' => 'required',
            'permissions' => 'array'
        ]);
        return $this->roleService->create($body);
    }

    public function update(Request $request, $id)
    {
        $body = $request->validate([
            'name' => 'required',
            'permissions' => 'array'
        ]);
        return $this->roleService->update($body, $id);
    }

    public function delete($id)
    {
        return $this->roleService->delete($id);
    }

    public function assignUsers(Request $request, $id)
    {
        $data = [
            'items' => $request->all()
        ];

        $validator = Validator::make($data, [
            'items' => 'required',
            'items.*' => 'required|integer'
        ], [
            'items.required' => "Bắt buộc phải có dữ liệu",
            'items.*.integer' => "Dữ liệu phải là 1 danh sách số",
            'items.*.required' => "Danh sách phải có dữ liệu",

        ]);
        if ($validator->fails()) {
            return response()->json(
                [
                    'success' => false,
                    'errors' => $validator->errors()->all()
                ]
            );
        }
        return $this->roleService->assignUsers($request->all(), $id);
    }
}
