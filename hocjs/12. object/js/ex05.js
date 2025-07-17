//Class
class User {
  //Thuộc tính
  //   name = "";
  //   email = "";
  //Hàm khởi tạo --> Chạy ngay sau khi instance được tạo
  #income = 1000;
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  //Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }

  getIncome() {
    return this.#income;
  }

  //Thuộc tính static
  static message = "Unicode Academy";

  //Phương thức static
  static getMessage() {
    return this.message;
  }
}

class Auth extends User {
  isLogin = false;
  constructor(name, email, userAgent) {
    super(name, email); //Gọi constructor của class cha
    this.userAgent = userAgent; //Gán giá trị cho thuộc tính userAgent của class Auth
  }
  login() {
    this.isLogin = true;
  }
}
//Instance
// const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// console.log(user.getIncome());
const auth = new Auth("Hoàng An", "hoangan.web@gmail.com", "Chrome");
console.log(auth);
// auth.login();
// console.log(auth.isLogin);
