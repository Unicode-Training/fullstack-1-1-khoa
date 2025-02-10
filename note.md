# Cách website hoạt động

## Mô hình Client - Server

Client => Thông qua HTTP => Gửi yêu cầu lên Server (Địa chỉ IP)

Server => Xử lý dữ liệu => Thông qua HTTP => Trả về nội dung cho Client => Client hiển thị cho người dùng

Muốn gửi yêu cầu: Gõ địa chỉ ip lên trình duyệt

## Tên miền

- Dễ nhớ, trỏ đến địa chỉ IP thông qua máy chủ phân giải (DNS SERVER)

Bước 1: User nhập tên miền ==> Trình duyệt gửi yêu cầu tới DNS Server ==> Phân giải và trả về IP cho trình duyệt

Bước 2: Trình duyệt sẽ gửi yêu cầu tới máy chủ có địa chỉ IP nhận được ở bước trên

Bước 3: Máy chủ trả về kết quả

## HTTP Request - HTTP Response

1. HTTP Request

- URL: Địa chỉ của Server
- Method: Phương thức gửi (GET, POST, PUT, PATCH, DELETE)
- Headers: Thông tin đi kèm gửi lên Server
- Body: Nội dung chính gửi lên Server

2. HTTP Response

- Status: Trạng thái của response
- Headers: Thông tin đi kèm từ Server trả về
- Body: Nội dung phản hồi

# Ngôn ngữ định dạng CSS

## Cách viết CSS trong trang web

1. Viết trực tiếp CSS thông qua thẻ style trong HTML (Internal CSS)

```
<style>
    selector {
        thuoctinh: giatri;
    }
</style>
```

2. Tách file css riêng (External CSS)

```
<link rel="stylesheet" href="duong-dan-file-css" />
```

3. Viết trực tiếp css vào thẻ html thông qua thuộc tính style (Inline CSS)

```
<tenthe style="thuoctinh:giatri">Nội dung</tenthe>
```

## Selector (Bộ chọn)

Chọn đúng thẻ html muốn định dạng trên trang web

1. id

```
#id {
    thuoctinh: giatri
}
```

2. class

```
.class {
    thuoctinh: giatri
}
```

3. tagname

```
tagname {
     thuoctinh: giatri
}
```

4. Kết hợp

4.1. Nằm trong

```
selector1 selector2 selectorn {
    thuoctinh: giatri
}
```

Lưu ý: Không giới hạn cấp

4.1. Cha con

```
selector1 > selector2 > selectorn {
    thuoctinh: giatri
}
```

4.3. Kết hợp cùng cấp

```
selector1selector2selector3 {
     thuoctinh: giatri
}
```

Lưu ý: Nếu selector ở dạng tagname thì phải khai báo ở đầu, các trường hợp còn lại không quan trọng thứ tự

4.4. Dùng chung

```
selector1, selector2, selectorn {
    thuoctinh: giatri
}
```

4.5. Đứng sau

```
selector1 ~ selector2 ~ selectorn {
    thuoctinh: giatri
}
```

Chọn selector sau ngang hàng với selector trước và đứng sau

Điều kiện:

- Ngang hàng
- Đứng sau
- Cùng thuộc 1 cha

  4.6. Đứng sau liền kề

```
selector1 + selector2 + selectorn {
    thuoctinh: giatri
}
```

Điều kiện:

- Ngang hàng
- Đứng sau
- Cùng thuộc 1 cha

5. Attribute Selector

tenthe[tenthuoctinh] ==> Chọn thẻ có thuộc tính

tenthe[tenthuoctinh="giatri"] ==> Chọn thẻ có thuộc tính bằng giá trị (Tuyệt đối)

tenthe[tenthuoctinh*="giatri"] ==> Chọn thẻ có thuộc tính chứa giá trị

tenthe[tenthuoctinh^="giatri"] ==> Chọn thẻ có thuộc tính bắt đầu bằng giá trị

tenthe[tenthuoctinh$="giatri"] ==> Chọn thẻ có thuộc tính kết thúc bằng giá trị

## Pseudo

1. Pseudo Element (Phần tử giả)

Cú pháp: selector::tenphantu {

}

- before
- after
  ==> Bắt buộc phải có thuộc tính content
  ==> Kiểu inline
- first-line
- first-letter
- selection
- placeholder

2. Pseudo Class (Lớp giả)

Cú pháp: selector:tenphantu {

}

- hover
- active
- focus --> Chỉ áp dụng trong form
  Ngoại lệ: Nếu thẻ html có thuộc tính tabindex => Focus hoạt động

- first-child --> Chọn phần tử con đầu tiên
- last-child --> Chọn phần tử con cuối cùng

Lưu ý:

- Ngang hàng và cùng thuộc 1 cha
- Cùng kiểu thẻ

- first-of-type
- last-of-type

- nth-child(number): Chọn phần tử con bất kỳ
- nth-of-type(number): Chọn theo kiểu

- not(selector): Loại trừ selector

- disabled: Khi trong form có thuộc tính disabled

- read-only: Khi trong form có thuộc tính readonly
