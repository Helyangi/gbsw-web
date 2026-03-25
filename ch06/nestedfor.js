// 2중 for문을 사용해 2 ~ 9단 구구단을 출력하세요.
for (let dan = 2; dan <= 9; dan++)
{
    for(let num = 1; num <= 9; num++)
    {
        console.log(`${dan} * ${num} = ${dan * num}`)
    }
    console.log()
}