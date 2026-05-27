// 비구조화

const color = ["R", "G", "B"];
const user =
{
    id:"gbsw",
    pw:"1234",
    name:"우성윤",
    age: 17
}
// 전개 연산자 사용하여 배열 나머지 처리나, 배열 결합 가능
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2]
console.log("이것이"+arr3)
// let r = color[0];
// let g = color[1];
// let b = color[2];

let [r,, g, b="C"] = ["C#", "JS", "C++", "Java"];
console.log(r);
console.log(g);
console.log(b);
[b, g, r] = [r, g]
console.log(r)
let {id, pw, name, age} = user;
console.log(id)

let asdf = 10;
let zxcv = 15;

[asdf, zxcv] = [zxcv, asdf];
let {id2, ...others} = user;
console.log("d" + others);