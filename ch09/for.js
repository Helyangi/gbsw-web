const arr = ["사자", "호랑이", "고양이"];
const obj = {name : "우성윤", age : 27};
// of을 사용해 배열 순회 가능
for (let animal of arr)
{
    console.log(animal);
}
// in을 사용해 객체 순회 가능
for (let key in obj)
{
    console.log(key)
    console.log(obj.key)
}