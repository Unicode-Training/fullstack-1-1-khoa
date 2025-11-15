# Laravel

## Eloquent ORM

1. Tạo Model

```
php artisan make:model TenModel
```

2. Truy vấn

2.1. Thêm dữ liệu

```
TenModel::create(mang)
```

2.2. Sửa dữ liệu

```
TenModel::where('id', $id)->update(mang)
```

2.3. Xóa dữ liệu

```
TenModel::where('id', $id)->delete()
```

2.4. Lọc dữ liệu

`all()`: Lấy tất cả dữ liệu theo model

`get()`: Lấy tất cả dữ liệu theo kết quả truy vấn

`first()`: Lấy bản ghi đầu tiên theo kết quả truy vấn

`where('field', 'compare', 'value')`: Đưa mệnh đề where

Hỗ trợ đầy đủ các toán tử: >, <, >=, <=, =, !=, like

`orWhere()`: where với mệnh đề OR

`query()`: Tạo đối tượng truy vấn

`orderBy()`: Sắp xếp

`select()`: Chọn trường trả về

`limit()`: Giới hạn bản ghi

`offset()`: Bỏ qua bản ghi
