const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const size = 3;
//Chunk array
// -> [[1,2,3], [4,5,6], [7,8,9], [10,11]]
console.log(numbers);

// const newArr = numbers.reduce((prev, current, index) => {
//   if (index % size === 0) {
//     const subArr = numbers.slice(index, index + size);
//     prev.push(subArr);
//   }
//   return prev;
// }, []);
// console.log(newArr);

//Cách khác
/*
[[]] --> [[1]] --> [[1,2]] --> [[1,2,3]] --> Hết phiên
[[1,2,3], [4]] --> [[1,2,3], [4,5]] --> [[1,2,3], [4,5,6]] --> Hết phiên
*/

const newArr = numbers.reduce(
  (prev, current) => {
    //Lấy mảng con cuối cùng
    const lastSubArr = prev[prev.length - 1];
    if (lastSubArr.length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(newArr);
