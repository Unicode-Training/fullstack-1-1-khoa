//DOM Nodes

//HTML -> DOM -> Dùng js để truy cập vào DOM và thay đổi giao diện

//Tạo Node (Object) bằng JS --> Đưa node vào cây DOM --> Trình duyệt Render Node đó để người dùng nhìn thấy giao diện

//Ưu điểm:
// - Kiểm soát được việc cập nhật giao diện theo từng Node --> Tránh update cả trang
// - Dễ dàng thao tác với node

const root = document.querySelector("#root");

//Tạo element (Node Element)
// const h1 = document.createElement("h1");
// h1.innerText = "Xin chào anh em";
// h1.classList.add("title");

// const span = document.createElement("span");
// span.innerText = "Unicode";

// h1.append(span);

// const button = document.createElement("button");
// button.innerText = "Click me";

// button.addEventListener("click", () => {
//   h1.innerText = "Ahihi";
// });

// //Đưa node vào cây dom
// root.append(h1);
// root.append(button);

/*
<ul class="menu" id="navigation">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
<button>Add Item</button>

- Sử dụng hàm createElement, append, prepend để tạo các node dựa vào đoạn html trên sau đó đưa vào #root
- Xử lý khi click vào nút "Add Item" sẽ thêm mới li (Số thứ tự phải tăng lên)
*/
// const ul = document.createElement("ul");
// ul.className = "menu";
// ul.id = "navigation";
// for (let i = 0; i < 4; i++) {
//   const li = document.createElement("li");
//   li.innerText = `Item ${i + 1}`;
//   ul.append(li);
// }

// const button = document.createElement("button");
// button.innerText = "Add Item";
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   const length = ul.children.length;
//   li.innerText = `Item ${length + 1}`;
//   ul.append(li);
// });
// root.append(ul);
// root.append(button);

//insertBefore
// const h1 = document.createElement("h1");
// h1.innerHTML = "Title 1";
// const h2 = document.createElement("h2");
// h2.innerHTML = "Title 2";
// const h3 = document.createElement("h3");
// h3.innerHTML = "Title 3";
// root.append(h1);
// root.append(h2);

//Chèn h3 trước h2
// root.insertBefore(h3, h2);

//replaceChild
// root.replaceChild(h3, h2);

//removeChild
// root.removeChild(h2);

//textNode: Không thuộc thẻ html, nhưng nó lại là object
// const h1 = document.createElement("h1");
// h1.innerText = "Count: ";
// const number = document.createTextNode(0);
// h1.append(number);
// console.dir(number);
// const button = document.createElement("button");
// button.innerText = `+`;
// button.addEventListener("click", () => {
//   number.data++;
// });
// root.append(h1);
// root.append(button);

//cloneNode --> Sao chép 1 node có sẵn
const h1 = document.createElement("h1");
h1.innerText = "Ahihi";
root.append(h1);
root.append(h1.cloneNode(true));
