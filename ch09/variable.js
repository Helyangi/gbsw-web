// var는 함수 스코프
// let const 블록 스코프
function test1() // 잘 돌아간다.
{
    if (true)
    {
        var a = 10
    }
    console.log(a)
}
function test2() // 오류난다.
{
    if (true)
    {
        const a = 10
    }
    console.log(a)
}
