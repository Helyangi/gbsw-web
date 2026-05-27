const obj = {"name": "우성윤", "age": 17, 
    // 객체 내 메서드 선언
    sayHello: function (msg)
    {
        console.log("Hello" + msg)
    }
};
obj.sayHello("ㅋㅋㅋ");
obj.name = "아이 좋아"
console.log(obj["name"]);
console.log(obj.name);
// 첫 선언때 없던 속성인 경우 동적으로 추가 가능
obj.gender = "male"
console.log(obj)
// delete 키워드를 사용해 속성을 지정해 삭제할 수 있다.
delete obj.gender
console.log(obj)

let id = "1234";
let pw = "5678";

// 키값을 생략하는 경우, 변수명을 키로 사용
const obj2 = {
    id,
    pw
};
console.log(obj2)