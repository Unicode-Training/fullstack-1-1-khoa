# Permission Manager

POST /admin/roles --> Thêm role mới
Header: Auth
Body:
{
name: "Admin"
permissions: [
"posts.view",
"posts.create"
]
}

PUT /admin/roles/{id} --> Sửa role
Header: Auth
Body:
{
name: "Admin"
permissions: [
"posts.view",
"posts.create"
]
}

DELETE /admin/roles/{id} --> Xóa role
Header: Auth

Lưu ý: Xóa bảng roles, users_roles, roles_permissions

PUT /admin/users/{id}/roles --> Cập nhật role cho user

Header: Auth

Thêm dữ liệu vào bảng users_roles
