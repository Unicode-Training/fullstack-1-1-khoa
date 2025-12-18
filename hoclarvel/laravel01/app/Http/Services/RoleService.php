<?php

namespace App\Http\Services;

use App\Models\Permission;
use App\Models\Role;

class RoleService
{
    public function getAll($request)
    {
        $relation = $request->query('include');
        $query = Role::query();
        if ($relation) {
            $query->with($relation);
        }
        return $query->get();
    }

    public function create($body)
    {
        $role = Role::create($body);
        if (!empty($body['permissions'])) {
            $permissions = [];
            foreach ($body['permissions'] as $permissionName) {
                $permission = Permission::firstOrCreate([
                    'name' => trim($permissionName)
                ], [
                    'name' => trim($permissionName)
                ]);
                array_push($permissions, $permission);
            }
            $role->permissions()->attach($permissions);
        }
        $role->permissions;
        return $role;
    }

    public function update($body, $id)
    {
        Role::where('id', $id)->update([
            'name' => $body['name']
        ]);

        $role = Role::find($id);

        if (!empty($body['permissions'])) {
            $permissions = [];
            foreach ($body['permissions'] as $permissionName) {
                $permission = Permission::firstOrCreate([
                    'name' => trim($permissionName)
                ], [
                    'name' => trim($permissionName)
                ]);
                array_push($permissions, $permission);
            }
            $role->permissions()->sync($permissions);
        }
        $role->permissions;
        return $role;
    }

    public function delete($id)
    {
        $role = Role::find($id);
        $role->permissions()->detach();
        $role->delete();
        return $role;
    }

    public function assignUsers($users, $id)
    {
        $role = Role::find($id);
        $role->users()->sync($users);
        // $role->users;
        // return $role;
        return $role->load('users');
    }
}
