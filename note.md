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

## Các thuộc tính định dạng text

### Đơn vị trong CSS

1. Đơn vị tuyệt đối

- px --> Điểm ảnh trên màn hình
- pt --> 1.3 x px

2. Đơn vị tương đối

- em --> Tỷ lệ theo font-size với phần tử cha (`xem = x * font-size`)
- rem --> Tỷ lệ theo font-size mặc định của trình duyệt
- % --> Tỷ lệ theo thuộc tính đang xử lý của phần tử cha
- vw --> viewport width: Khung hiển chiều rộng của trình duyệt
- vh --> viewport height: Khung hiển thị chiều ngang của trình duyệt

### Thuộc tính color

Cú pháp: color: mamau|tenmau
Tác dụng: Đổi màu văn bản

- tenmau: Tên màu Tiếng Anh (red, green,...)
- mamau:

* hexa
* rgb
* hsl

Lưu ý:

- Thuộc tính color là thuộc tính kế thừa
- Color Opacity

### Thuộc tính font-size

Tác dụng: Thay đổi cỡ chữ của văn bản

Cú pháp: font-size: giatri + donvi

### Thuộc tính line-height

Tác dụng: Tùy biến chiều cao của dòng (giãn dòng)

Cú pháp: line-height: giatri

Tỷ lệ theo font-size của chính nó

### Thuộc tính font-family

Tác dụng: Thiết lập font chữ cho văn bản

Cú pháp: font-family: tenfont1, tenfont2, tenfont3,...

Tên font chia 2 loại

- Font mặc định của máy tính
- Font được nạp vào trang web (@font-face)

Nạp font vào trang web

1. Nạp Local

Lấy file font đưa vào project

2. Nạp qua CDN

Lấy link css từ các thư viện

Họ font mặc định

- sans-serif: Họ font không chân
- serif: Họ font có chân

### Thuộc tính text-decoration

- Tác dụng: Thêm đường line vào văn bản
- Cú pháp: text-decoration: none | underline | overline | line-through

### Thuộc tính text-transform

- Tác dụng: Thay đổi kiểu hoa, thường của văn bản
- Cú pháp: text-transform: none | lowercase | uppercase | capitalize

### Thuộc tính letter-spacing

- Tác dụng: Thay đổi khoảng cách giữa các ký tự
- Cú pháp: letter-spacing: giatri + donvi

### Thuộc tính word-spacing

- Tác dụng: Thay đổi khoảng cách giữa các từ
- Cú pháp: word-spacing: giatri + donvi

### Thuộc tính text-align

- Tác dụng: Căn chỉnh văn bản theo thẻ cha (block)
- Cú pháp: text-align: left|center|right|justify

Lưu ý: Đối với các thẻ inline, trình duyệt sẽ đối xử lý như văn bản --> Dùng text-align như bình thường

## Thuộc tính background

- background-color --> Thay đổi màu nền
- background-image --> Thiết lập ảnh nền
- background-repeat --> Thay đổi độ lặp của ảnh nền
- background-position --> Thiết lập vị trí của ảnh nền
- background-size --> Thiết lập kích thước của ảnh nền
- background-attachment --> Thiết lập cố định ảnh nên thay đổi thanh cuộn
- background: Tổng hợp các thuộc trên

Lưu ý: Khi thiết lập background, theo kích thước của thẻ html (Trừ body và html)

background: color image repeat position / size attach

## Thuộc tính border

Cấu tạo border

- width --> Độ dày của viền (border-width)
- style --> Kiểu viền: none | solid | dashed | dotted | double (border-style)
- color --> Màu viền (border-color)

Ví dụ:

- border-width: value --> 4 cạnh
- border-width: value1 value2 --> value1 = top và bottom, value2 = left và right
- border-width: value1 value2 value3 --> value1 = top, value2 = left và right, value3 = bottom
- border-width: value1 value2 value3 value4 --> value1 = top, value2 = right, value3 = bottom, value4 = left

Các thuộc tính: border-style, border-color tương tự

Cú pháp chi tiết:

- border-{side}-width
- border-{side}-color
- border-{side}-style

size: top, left, right, bottom

Thuộc tính viết tắt khác

border: width style color
border-{side}: width style color
size: top, left, right, bottom

## Border-radius

- Nếu là hình vuông và border-radius >= 50% --> Tạo thành hình tròn
- Nêu muốn hiệu ứng ôm tròn 2 bên --> Đặt border-radius 1 giá trị >= chiều cao

Lưu ý:

- transparent --> màu trong suốt
- currentColor --> Lấy màu của thuộc tính color trong selector hiện tại

Trong tất cả thuộc tính css, có 2 giá trị kế toán

- inherit ==> Kế thừa từ phần tử cha
- initial ==> Kế thừa từ mặc định trình duyệt

## Width-Height

- Chỉ áp dụng nếu là block hoặc inline-block
- Dùng thuộc tính display để chuyển (Nếu cần)

Đặc biệt: Với những thẻ inline replace --> Vẫn thay đổi bình thường

Đơn vị:

- vw = viewport width
- vh = viewport height

Thuộc tính mở rộng

- min-width: Chiều rộng tối thiểu
- max-width: Chiều rộng tối đa
- min-height: Chiều cao tối thiểu
- max-height: Chiều cao tối đa

## Padding - Margin

- padding, margin không khả dụng top và bottom nếu là inline
- padding, margin nếu dùng đơn vị % --> tỷ lệ theo width của thẻ cha
- padding, margin nếu dùng em --> Tỷ lệ theo font-size của chính nó

Các thuộc tính mở rộng

- padding-top
- padding-left
- padding-right
- padding-bottom
- margin-top
- margin-left
- margin-right
- margin-bottom

- padding: value
- padding: value1 value2
- padding: value1 value2 value3
- padding: value1 value2 value3 value4

- margin: value
- margin: value1 value2
- margin: value1 value2 value3
- margin: value1 value2 value3 value4

## Thuộc tính box-sizing

- content-box --> Kích thước tính từ content
- border-box --> Kích thước tính từ border

## Reset css

```
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
}
```

## Thuộc tính display

- Thay đổi chế độ hiển thị của thẻ html
- display: none|block|inline|inline-block

## Thuộc tính visibility

visibility: visible|hidden

## Thuộc tính position

1. Vị trí tương đối

position: relative
top
left
right
bottom
z-index

2. Vị trí tuyệt đối

position: absolute
top
left
right
bottom
z-index

3. Vị trí cố định

position: fixed
top
left
right
bottom
z-index

4. Không có position

position: static

## Flex (Flexible Box Module)

- Kỹ thuật giúp chia bố cục trang web linh hoạt
- Có 2 phần:

* Flex container --> Thẻ bọc các item
* Flex Item

1. Các thuộc tính trong nhóm flex container

- display: flex | inline-flex --> Kích hoạt flex
- flex-direction: Chọn hướng cho trục chính

* row --> Mặc định
* row-reverse --> Trục ngang, đảo ngược
* column --> Chiều dọc từ trên xuống
* column-reverse --> Chiều đọc từ dưới lên

- justify-content: Điều khiển vị trí các item theo hướng song song với trục chính

* flex-start
* center
* flex-end
* space-around
* space-evenly
* space-between

- align-items: Điều khiển vị trí các item theo hướng song song với trục cross (Vuông góc với trục chính)

* stretch
* flex-start
* center
* flex-end
* baseline

- flex-wrap: Wrap các item khi vượt ra khỏi kích thước của container

* nowrap
* wrap
* wrap-reverse

- align-content: Điều khiển các hàng (cột) theo hướng vuông góc với trục chính

* stretch
* flex-start
* center
* flex-end
* space-around
* space-evenly
* space-between

- gap: Căn chỉnh khoảng cách giữa các items

2. Các thuộc tính trong nhóm item

- flex-grow: Tự động giãn đều các item lấp đầy vị trí còn trống
- flex-shrink: Tự động co lại khi bị tràn (Không có flex-wrap)
- flex-basis: Thiết lập kích thước ban đầu của item
- flex: grow shrink basis
- order: Sắp xếp các item
